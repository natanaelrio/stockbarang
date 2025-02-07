"use client"
import { useState, useEffect } from 'react';
import styles from '@/components/listProduct.module.css';
import BarcodeScanner from '@/components/barcode';
import { CreateActivity, CreateProductPendding, GetSearchProductID } from '@/service/data';
import toast from 'react-hot-toast';
import { useBearStore } from '@/zustand/data';
import { useRouter } from 'next/navigation';

export default function ScanCameraBarcode({ session }) {
    const roles = session?.role || [];
    const KondisiSessionNoPending = roles.includes('nopending')
    const KondisiSessionPending = roles.includes('pending')
    const KondisiSessionSales = roles.includes('sales')
    const verMin = roles.includes('vermin')
    const verPlus = roles.includes('verplus')

    const router = useRouter()
    const setRefreshData = useBearStore((state) => state.setRefreshData);
    const setIsLoadingProduk = useBearStore((state) => state.setIsLoadingProduk);
    const isLoadingProduk = useBearStore((state) => state.isLoadingProduk);
    const setScanShowCameraBarcode = useBearStore((state) => state.setScanShowCameraBarcode);
    const scannedData = useBearStore((state) => state.scannedData);
    const setScannedData = useBearStore((state) => state.setScannedData);
    const setDataBarcode = useBearStore((state) => state.setDataBarcode);
    const dataBarcode = useBearStore((state) => state.dataBarcode);

    const [hiddenStock, setHiddenStock] = useState(true)
    // const [dataBarcode, setDataBarcode] = useState(null)
    const [valueIdBarang, setValueIdBarang] = useState('')
    const [Nodata, setNoData] = useState('')
    useEffect(() => {
        const FetchData = async () => {
            setIsLoadingProduk(true)
            const data = await GetSearchProductID(scannedData)
            setDataBarcode(data.data)
            setIsLoadingProduk(false)
        }
        FetchData()
    }, [scannedData, setDataBarcode, setIsLoadingProduk])

    const handleCariIdBarang = async (e) => {
        e.preventDefault()
        // setHiddenCamera(false)
        setIsLoadingProduk(true)
        const data = await GetSearchProductID(valueIdBarang)
        setDataBarcode(data.data)
        setNoData(data?.dataLength)
        setIsLoadingProduk(false)
    }

    const [isTambahKurang, setIsTambahKurang] = useState(null)
    const [isShowRequest, setShowRequest] = useState(null)
    const [valueTambahKurang, setValueTambahKurang] = useState('')
    const [valueNoteBarang, setValueNoteBarang] = useState('tidak ada')

    const handleTambahKurang = async (e) => {
        e.preventDefault()
        setIsLoadingProduk(true)
        const FetchData = async () => {
            try {
                isTambahKurang && await CreateProductPendding({
                    stock_barang: valueTambahKurang,
                    note: valueNoteBarang,
                    produkid: dataBarcode[0]?.id,
                    user: session.namaUser,
                    username: session.username,
                    jenisBarang: 'Langsung',
                    role: 'verplus'
                })
                !isTambahKurang && await CreateProductPendding({
                    stock_barang: valueTambahKurang,
                    note: valueNoteBarang,
                    produkid: dataBarcode[0]?.id,
                    user: session.namaUser,
                    username: session.username,
                    jenisBarang: 'Langsung',
                    role: 'vermin'
                })
                KondisiSessionSales && await CreateProductPendding({
                    stock_barang: valueTambahKurang,
                    note: valueNoteBarang,
                    produkid: dataBarcode[0]?.id,
                    user: session.namaUser,
                    username: session.username,
                    jenisBarang: 'Request',
                    role: 'verplus'
                })

                isTambahKurang && await CreateActivity({
                    userActivity: session.namaUser,
                    activity: `Update Tambah ${valueTambahKurang} stock - ${dataBarcode[0]?.name_barang} ( ${dataBarcode[0]?.id} ) `
                })
                !isTambahKurang && await CreateActivity({
                    userActivity: session.namaUser,
                    activity: `Request ${valueTambahKurang} stock - ${dataBarcode[0]?.name_barang} ( ${dataBarcode[0]?.id}) - (note: ${valueNoteBarang}) ) `
                })
                !KondisiSessionSales && await CreateActivity({
                    userActivity: session.namaUser,
                    activity: `Request ${valueTambahKurang} stock - ${dataBarcode[0]?.name_barang} ( ${dataBarcode[0]?.id}) - (note: ${valueNoteBarang}) ) `
                })
                router.refresh()
                setScanShowCameraBarcode()
                setRefreshData()
                setIsLoadingProduk(false)
            } catch (e) {
                setRefreshData()
                setIsLoadingProduk(false)
                throw new Error("Server error, gagal update stock.");
            }
        }
        toast.promise(
            FetchData(),
            {
                loading: 'Saving...',
                success: <b>Berhasil Request {valueTambahKurang}!</b>,
                error: <b>Could not save.</b>,
            }
        );

    }


    return (
        <>
            <div className={styles.bghitam} onClick={() => setScanShowCameraBarcode()}></div>
            <div className={styles.inputbarang}>
                {!Boolean(dataBarcode?.length) &&
                    <>
                        <BarcodeScanner onScan={(data) => setScannedData(data)} />
                        <form className={styles.inputkamera}>
                            <input disabled={isLoadingProduk} onChange={(e) => setValueIdBarang(e.target.value)} type='text' placeholder='ID Barang' name='IdBarang' />
                            <button onClick={handleCariIdBarang} disabled={isLoadingProduk} type='submit'>Cari</button>
                        </form>
                    </>
                }
                {isLoadingProduk && <p><strong>Loading...</strong></p>}
                {Nodata == 'Tidak ada Produk' && Nodata}
                {Boolean(dataBarcode?.length) &&
                    <>
                        <h3>Detail Produk</h3>
                        <p><strong>ID: {dataBarcode[0]?.id}</strong></p>
                        <p><strong>Nama Barang:{dataBarcode[0]?.name_barang}</strong></p>
                        {hiddenStock && <p onClick={() => setHiddenStock(false)}><strong>Stok Barang:{dataBarcode[0]?.stock_barang}</strong></p>}
                        <span>
                            {KondisiSessionNoPending && <button onClick={() => setIsTambahKurang(true)}>Tambah +</button>}
                            {KondisiSessionPending && <button onClick={() => setIsTambahKurang(false)}>Kurang -</button>}
                            {isTambahKurang !== null &&
                                <form className={styles.inputkamera}>
                                    <input disabled={isLoadingProduk} onChange={(e) => setValueTambahKurang(e.target.value)} type='number' placeholder={isTambahKurang ? 'Tambahi ++' : 'Kurangi--'} name='IdBarang' />
                                    {!isTambahKurang && <input onChange={(e) => setValueNoteBarang(e.target.value)} type="text" placeholder='Note' />}
                                    <button disabled={isLoadingProduk} onClick={handleTambahKurang} type='submit'>{!isLoadingProduk ? 'Submit' : 'Loading...'}{isTambahKurang ? ' (Tambah)' : ' (Kurangi)'}</button>
                                </form>
                            }

                            {KondisiSessionSales && <button onClick={() => setShowRequest(true)}>Request Tambah +</button>}
                            {isShowRequest &&
                                <form className={styles.inputkamera}>
                                    <input disabled={isLoadingProduk} onChange={(e) => setValueTambahKurang(e.target.value)} type='number' placeholder={'Request Tambah'} name='IdBarang' />
                                    <input onChange={(e) => setValueNoteBarang(e.target.value)} type="text" placeholder='Note' />
                                    <button disabled={isLoadingProduk} onClick={handleTambahKurang} type='submit'>{!isLoadingProduk ? 'Submit' : 'Loading...'}</button>
                                </form>
                            }
                        </span>
                    </>
                }
                <div className={styles.close} onClick={() => setScanShowCameraBarcode()}>X</div>
            </div>
        </>
    )
}
