"use client"
import { useState } from 'react';
import styles from '@/components/listProduct.module.css';
import BarcodeScanner from '@/components/barcode';
import { CreateActivity, CreateProductPendding, GetSearchProductID, UpdateProductIndentIncrement } from '@/service/data';
import toast from 'react-hot-toast';
import { useBearStore } from '@/zustand/data';
import { useRouter } from 'next/navigation';
import HashLoader from "react-spinners/HashLoader";

export default function ScanCameraBarcode({ session }) {
    const roles = session?.role || [];
    const GudangID = session?.gudang
    const KondisiSessionNoPending = roles.includes('nopending')
    const KondisiSessionPending = roles.includes('pending')
    const KondisiSessionSales = roles.includes('sales')
    const KondisiSessionIndent = roles.includes('tambahindent')
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
    const setNotifNoData = useBearStore((state) => state.setNotifNoData);
    const notifNoData = useBearStore((state) => state.notifNoData);
    const [hiddenStock, setHiddenStock] = useState(true)
    // const [dataBarcode, setDataBarcode] = useState(null)

    const [valueIdBarang, setValueIdBarang] = useState('')
    const [enterValueIdBarang, setEnterValueIdBarang] = useState('')

    const handleCariIdBarang = async (e) => {
        e.preventDefault()
        setIsLoadingProduk(true)
        const data = await GetSearchProductID(valueIdBarang)
        setEnterValueIdBarang(valueIdBarang)
        setDataBarcode(data)
        setNotifNoData(!data.data.length)
        setIsLoadingProduk(false)
    }

    const [isTambahKurang, setIsTambahKurang] = useState(null)
    const [isShowRequest, setShowRequest] = useState(null)
    const [valueTambahKurang, setValueTambahKurang] = useState(1)
    const [valueNoteBarang, setValueNoteBarang] = useState('-')


    const handleTambahKurang = async (e) => {
        e.preventDefault()
        setIsLoadingProduk(true)

        const FetchData = async () => {
            try {
                await CreateProductPendding({
                    stockBarang: valueTambahKurang,
                    note: valueNoteBarang,
                    produkid: dataBarcode?.data[0]?.id,
                    user: session.namaUser,
                    username: session.username,
                    jenisBarang: isTambahKurang == 'kurang' && 'TidakLangsung' || KondisiSessionSales && 'Request' || KondisiSessionIndent && 'Indent' || 'Langsung',
                    role: KondisiSessionSales && 'verplus' ||
                        isTambahKurang == 'tambah' && 'verplus' ||
                        isTambahKurang == 'kurang' && 'vermin',
                    gedungId: GudangID
                })

                isTambahKurang == 'tambah' && await CreateActivity({
                    username: session.username,
                    userActivity: session.namaUser,
                    activity: `Request Tambah ${valueTambahKurang} stock - ${dataBarcode?.data[0]?.namaBarang} - (${dataBarcode?.data[0]?.id}) - (note: ${valueNoteBarang})`
                })
                isTambahKurang == 'kurang' && await CreateActivity({
                    username: session.username,
                    userActivity: session.namaUser,
                    activity: `Request Kurang ${valueTambahKurang} stock - ${dataBarcode?.data[0]?.namaBarang} - (${dataBarcode?.data[0]?.id}) - (note: ${valueNoteBarang})`
                })
                KondisiSessionSales && await CreateActivity({
                    username: session.username,
                    userActivity: session.namaUser,
                    activity: `Request ${valueTambahKurang} stock - ${dataBarcode?.data[0]?.namaBarang} - (${dataBarcode?.data[0]?.id}) - (note: ${valueNoteBarang}) `
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
            <div className={styles.bghitam} onClick={() => { !isLoadingProduk ? setScanShowCameraBarcode() : '' }}></div>
            <div className={styles.inputbarang}>
                {isLoadingProduk &&
                    <div className={styles.loading}>
                        <HashLoader
                            color={'red'}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                }
                {Boolean(notifNoData) && <div className={styles.tidakadaproduk}>
                    <p>{scannedData ? scannedData : enterValueIdBarang}</p>
                    <p>Tidak ada Product</p>
                </div>}
                {!isLoadingProduk && !Boolean(dataBarcode?.data?.length) &&
                    <>
                        <BarcodeScanner />
                        {!isLoadingProduk &&
                            <form className={styles.inputkamera}>
                                <input disabled={isLoadingProduk} onChange={(e) => setValueIdBarang(e.target.value)} type='text' placeholder='ID Barang' name='IdBarang' />
                                <button onClick={handleCariIdBarang} disabled={isLoadingProduk} type='submit'>Cari</button>
                            </form>
                        }
                    </>
                }
                {Boolean(dataBarcode?.data?.length) &&
                    <>
                        {/* <h3>Detail Produk</h3> */}
                        {/* <p><strong>ID: {dataBarcode?.data[0]?.id}</strong></p> */}
                        <p><strong className={styles.juduldetail}>{dataBarcode?.data[0]?.namaBarang}</strong></p>
                        {hiddenStock && (
                            <table onClick={() => setHiddenStock(false)} border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th>Gudang</th>
                                        <th>Stock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataBarcode?.data[0].produkGedung?.find((item) => item?.gedungId == 11111) && (
                                        <tr>
                                            <td>Gudang 94</td>
                                            <td style={{ textAlign: 'center' }}>{dataBarcode?.data[0].produkGedung?.find((item) => item?.gedungId == 11111)?.stockBarang}</td>
                                        </tr>
                                    )}
                                    {dataBarcode?.data[0].produkGedung?.find((item) => item?.gedungId == 22222) && (
                                        <tr>
                                            <td>Gudang 29</td>
                                            <td style={{ textAlign: 'center' }}>{dataBarcode?.data[0].produkGedung?.find((item) => item?.gedungId == 22222)?.stockBarang}</td>
                                        </tr>
                                    )}
                                    {dataBarcode?.data[0].produkGedung?.find((item) => item?.gedungId == 33333) && (
                                        <tr>
                                            <td>Gudang Surabaya</td>
                                            <td style={{ textAlign: 'center' }}>{dataBarcode?.data[0].produkGedung?.find((item) => item?.gedungId == 33333)?.stockBarang}</td>
                                        </tr>
                                    )}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td><b>TOTAL</b></td>
                                        <td style={{ textAlign: 'center' }}>
                                            <b>
                                                {dataBarcode?.data[0].produkGedung
                                                    ?.filter((item) => [11111, 22222, 33333].includes(item?.gedungId))
                                                    .reduce((total, item) => total + (item?.stockBarang || 0), 0)}
                                            </b>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        )}
                        <span>
                            {KondisiSessionNoPending && <button disabled={isLoadingProduk} onClick={() => setIsTambahKurang('tambah')}>{KondisiSessionIndent ? 'Tambah Indent+' : 'Tambah+'}</button>}
                            {KondisiSessionPending && <button disabled={isLoadingProduk} onClick={() => setIsTambahKurang('kurang')}>Kurang -</button>}
                            {isTambahKurang !== null &&
                                <form className={styles.inputkamera}>
                                    <input disabled={isLoadingProduk} onChange={(e) => setValueTambahKurang(e.target.value)} type='number' placeholder={isTambahKurang == 'tambah' && 'Stock++' || isTambahKurang == 'kurang' && 'Stock--'} name='IdBarang' />
                                    <input disabled={isLoadingProduk} onChange={(e) => setValueNoteBarang(e.target.value)} type="text" placeholder='Note' />
                                    <button disabled={isLoadingProduk} onClick={handleTambahKurang} type='submit'>{!isLoadingProduk ? 'Submit' : 'Loading...'}{isTambahKurang == 'tambah' && '(Tambah)' || isTambahKurang == 'kurang' && '(Kurang)' || KondisiSessionIndent && '(Tambah Indent)'}</button>
                                </form>
                            }

                            {KondisiSessionSales && <button disabled={isLoadingProduk} onClick={() => setShowRequest(true)}>Request Tambah +</button>}
                            {isShowRequest &&
                                <form className={styles.inputkamera}>
                                    <input disabled={isLoadingProduk} onChange={(e) => setValueTambahKurang(e.target.value)} type='number' placeholder={'Stock++'} name='IdBarang' />
                                    <input disabled={isLoadingProduk} onChange={(e) => setValueNoteBarang(e.target.value)} type="text" placeholder='Note' />
                                    <button disabled={isLoadingProduk} onClick={handleTambahKurang} type='submit'>{!isLoadingProduk ? 'Submit' : 'Loading...'}</button>
                                </form>
                            }
                        </span>
                    </>
                }
                <div className={styles.close} onClick={() => !isLoadingProduk ? setScanShowCameraBarcode() : ''}>X</div>
            </div>
        </>
    )
}
