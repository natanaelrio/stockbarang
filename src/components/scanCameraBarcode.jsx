"use client"
import { useState, useEffect, useRef } from 'react';
import styles from '@/components/listProduct.module.css';
import BarcodeScanner from '@/components/barcode';
import { CreateActivity, CreateProductPendding, GetSearchProductID, UpdateIncrement } from '@/service/data';
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
    const setScanShowCameraBarcode = useBearStore((state) => state.setScanShowCameraBarcode);
    const scannedData = useBearStore((state) => state.scannedData);
    const setScannedData = useBearStore((state) => state.setScannedData);

    const [dataBarcode, setDataBarcode] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [valueIdBarang, setValueIdBarang] = useState('')
    const [Nodata, setNoData] = useState('')

    useEffect(() => {
        const FetchData = async () => {
            setIsLoading(true)
            const data = await GetSearchProductID(scannedData)
            setDataBarcode(data.data)
            setIsLoading(false)
        }
        FetchData()
    }, [scannedData])

    const handleCariIdBarang = async (e) => {
        e.preventDefault()
        // setHiddenCamera(false)
        setIsLoading(true)
        const data = await GetSearchProductID(valueIdBarang)
        setDataBarcode(data.data)
        setNoData(data?.dataLength)
        setIsLoading(false)
    }

    const [isTambahKurang, setIsTambahKurang] = useState(null)
    const [isShowRequest, setShowRequest] = useState(null)
    const [valueTambahKurang, setValueTambahKurang] = useState('')
    const [valueNoteBarang, setValueNoteBarang] = useState('tidak ada')

    const handleTambahKurang = async (e) => {
        e.preventDefault()
        setIsLoading(true)
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

            } catch (e) {
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
        router.refresh()
        setScanShowCameraBarcode()
        setIsLoading(false)
    }


    return (
        <>
            <div className={styles.bghitam} onClick={() => setScanShowCameraBarcode()}></div>
            <div className={styles.inputbarang}>
                {!Boolean(dataBarcode?.length) &&
                    <>
                        <BarcodeScanner onScan={(data) => setScannedData(data)} />
                        <form className={styles.inputkamera}>
                            <input disabled={isLoading} onChange={(e) => setValueIdBarang(e.target.value)} type='text' placeholder='ID Barang' name='IdBarang' />
                            <button onClick={handleCariIdBarang} disabled={isLoading} type='submit'>Cari</button>
                        </form>
                    </>
                }
                {isLoading && <p><strong>Loading...</strong></p>}
                {Nodata == 'Tidak ada Produk' && Nodata}
                {Boolean(dataBarcode?.length) &&
                    <>
                        <h3>Detail Produk</h3>
                        <p><strong>ID: {dataBarcode[0]?.id}</strong></p>
                        <p><strong>Nama Barang:{dataBarcode[0]?.name_barang}</strong></p>
                        <p><strong>Stok Barang:{dataBarcode[0]?.stock_barang}</strong></p>
                        <span>
                            {KondisiSessionNoPending && <button onClick={() => setIsTambahKurang(true)}>Tambah +</button>}
                            {KondisiSessionPending && <button onClick={() => setIsTambahKurang(false)}>Kurang -</button>}
                            {isTambahKurang !== null &&
                                <form className={styles.inputkamera}>
                                    <input disabled={isLoading} onChange={(e) => setValueTambahKurang(e.target.value)} type='number' placeholder={isTambahKurang ? 'Tambahi ++' : 'Kurangi--'} name='IdBarang' />
                                    {!isTambahKurang && <input onChange={(e) => setValueNoteBarang(e.target.value)} type="text" placeholder='Note' />}
                                    <button disabled={isLoading} onClick={handleTambahKurang} type='submit'>Submit{isTambahKurang ? ' (Tambah)' : ' (Kurangi)'}</button>
                                </form>
                            }

                            {KondisiSessionSales && <button onClick={() => setShowRequest(true)}>Request Tambah +</button>}
                            {isShowRequest &&
                                <form className={styles.inputkamera}>
                                    <input disabled={isLoading} onChange={(e) => setValueTambahKurang(e.target.value)} type='number' placeholder={'Request Tambah'} name='IdBarang' />
                                    <input onChange={(e) => setValueNoteBarang(e.target.value)} type="text" placeholder='Note' />
                                    <button disabled={isLoading} onClick={handleTambahKurang} type='submit'>Submit</button>
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
