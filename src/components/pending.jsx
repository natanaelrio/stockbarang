"use client"
import styles from '@/components/listProduct.module.css';
import { TimeConverter } from '@/utils/formatMoment';
import { CreateActivity, UpdateDecrement, UpdateIncrement, updateJenisBarang, UpdateProductIndentDecrement, UpdateProductIndentIncrement } from '@/service/data';
import { GetPendingProduct } from '@/service/dataClient'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useBearStore } from '@/zustand/data';
import { useEffect, useState } from 'react';

export default function Pending({ session }) {
    const router = useRouter()
    const roles = session?.role || [];
    const KondisiSessionTambah = roles.includes('verplus')
    const KondisiSessionKurang = roles.includes('vermin')
    const KondisiSessionKurangTambah = roles.includes('verminplus')
    const setShowNoteSales = useBearStore((state) => state.setShowNoteSales);
    const setDataSales = useBearStore((state) => state.setDataSales);
    const setIsLoadingProduk = useBearStore((state) => state.setIsLoadingProduk);
    const isLoadingProduk = useBearStore((state) => state.isLoadingProduk);
    const refreshData = useBearStore((state) => state.refreshData);
    const setDataPending = useBearStore((state) => state.setDataPending);
    const dataPending = useBearStore((state) => state.dataPending);
    const setRefreshData = useBearStore((state) => state.setRefreshData);
    const [dataFillter, setDataFillter] = useState('undefined')

    useEffect(() => {
        const FetchData = async () => {
            try {
                setIsLoadingProduk(true)
                const data = await GetPendingProduct(KondisiSessionKurang && 'vermin' || KondisiSessionTambah && 'verplus' || KondisiSessionKurangTambah && null, dataFillter)
                setIsLoadingProduk(false)
                setDataPending(data?.data)
            }
            catch (e) {
                setIsLoadingProduk(false)
            }
        }
        FetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshData, dataFillter])

    const handleConfirm = async (product) => {
        const KondisiPlus = product?.role == 'verplus'
        const KondisiMin = product?.role == 'vermin'
        const isConfirmed = window.confirm(`Apakah Anda yakin ingin mengonfirmasi ${product?.products[0].namaBarang}?`);
        if (isConfirmed) {
            const FetchDataFinal = async () => {
                try {
                    setIsLoadingProduk(true)
                    !product?.statusProduct ?
                        await UpdateDecrement({
                            stockBarang: product?.stockBarang,
                            gedungId: product?.gedungId,
                            productId: product?.products[0]?.id,
                            idPending: product?.id,
                            statusProduct: !product?.statusProduct,
                        }) : await UpdateIncrement({
                            stockBarang: product?.stockBarang,
                            gedungId: product?.gedungId,
                            productId: product?.products[0]?.id,
                            idPending: product?.id,
                            statusProduct: !product?.statusProduct,
                        })

                    !product?.statusProduct ?
                        await CreateActivity({
                            userActivity: session.namaUser,
                            activity: `Konfirmasi Pengurangan ${product?.stockBarang} stock - ${product?.products[0]?.namaBarang} ( ${product?.products[0]?.id} ) `
                        }) :
                        await CreateActivity({
                            userActivity: session.namaUser,
                            activity: `Konfirmasi Pembatalan ${product?.stockBarang} stock - ${product?.products[0]?.namaBarang} ( ${product?.products[0]?.id} ) `
                        })
                    setIsLoadingProduk(false)
                } catch (e) {
                    throw new Error("Server error, gagal menyimpan produk.");
                }
            }
            KondisiMin && toast.promise(
                FetchDataFinal(),
                {
                    loading: 'Saving...',
                    success: <b>{product?.products[0].namaBarang}, Berhasil diUpdate!</b>,
                    error: <b>ID : {product?.products[0]?.id} syudah adaww....</b>,
                }
            );
            const FetchDataPlus = async () => {
                try {
                    setIsLoadingProduk(true)
                    !product?.statusProduct ?
                        await UpdateIncrement({
                            stockBarang: product?.stockBarang,
                            gedungId: product?.gedungId,
                            productId: product?.products[0]?.id,
                            idPending: product?.id,
                            statusProduct: !product?.statusProduct,
                        }) : await UpdateDecrement({
                            stockBarang: product?.stockBarang,
                            gedungId: product?.gedungId,
                            productId: product?.products[0]?.id,
                            idPending: product?.id,
                            statusProduct: !product?.statusProduct,
                        })

                    !product?.statusProduct ?
                        await UpdateProductIndentDecrement({
                            productId: product?.products[0]?.id,
                            stockBarang: product?.stockBarang,
                        }) : await UpdateProductIndentIncrement({
                            productId: product?.products[0]?.id,
                            stockBarang: product?.stockBarang,
                        })

                    !product?.statusProduct ?
                        await CreateActivity({
                            userActivity: session.namaUser,
                            activity: `Konfirmasi Tambah(indent) ${product?.stockBarang} stock - ${product?.products[0]?.namaBarang} ( ${product?.products[0]?.id} ) `
                        }) :
                        await CreateActivity({
                            userActivity: session.namaUser,
                            activity: `Konfirmasi Pembatalan(indent) ${product?.stockBarang} stock - ${product?.products[0]?.namaBarang} ( ${product?.products[0]?.id} ) `
                        })
                    setIsLoadingProduk(false)
                    setRefreshData()

                } catch (e) {
                    setIsLoadingProduk(false)
                    setRefreshData()
                    throw new Error("Server error, gagal menyimpan produk.");
                }
            }
            KondisiPlus && toast.promise(
                FetchDataPlus(),
                {
                    loading: 'Saving...',
                    success: <b>{product?.products[0].namaBarang}, Berhasil diUpdate!</b>,
                    error: <b>ID : {product?.products[0]?.id} syudah adaww....</b>,
                }
            );
        }
        router.refresh()
    };


    // const handlePlusMinIndent = async (e) => {
    //     const FetchDataIndent = async () => {
    //         try {
    //             setIsLoadingProduk(true)
    //             await updateJenisBarang({
    //                 id: e?.id,
    //                 jenisBarang: 'Indent'
    //             })
    //             setIsLoadingProduk(false)
    //             setRefreshData()
    //             await CreateActivity({
    //                 userActivity: session.namaUser,
    //                 activity: `Konfirmasi Tambah(indent) ${e?.stockBarang} stock - ${e?.products[0]?.namaBarang} ( ${e?.products[0]?.id} ) `
    //             })
    //         } catch (e) {
    //             setRefreshData()
    //             setIsLoadingProduk(false)
    //             throw new Error("Server error, gagal menyimpan produk.");
    //         }
    //     }
    //     toast.promise(
    //         FetchDataIndent(),
    //         {
    //             loading: 'Saving...',
    //             success: <b>{e.products[0].namaBarang}, Berhasil diUpdate!</b>,
    //             error: <b>ID : gagal ulangg!!....</b>,
    //         })
    // }

    const userSeason = {
        datauser: session.namaUser
    }
    const handleHapusRequest = async (e) => {
        setDataSales({ ...e, ...userSeason })
        setShowNoteSales()
    }

    return (
        <>
            <div className={styles.containerlist}>
                <div className={styles.tableContainer}>
                    {isLoadingProduk && <div>Loading...</div>}
                    <>
                        {KondisiSessionTambah &&
                            <div className={styles.fillterpendding}>
                                <span style={dataFillter == 'undefined' ? { background: 'black', color: 'white' } : {}} onClick={() => setDataFillter('undefined')}>Semua</span>
                                <span style={dataFillter == 'Langsung' ? { background: 'black', color: 'white' } : {}} onClick={() => setDataFillter('Langsung')}>Langsung</span>
                                <span style={dataFillter == 'Indent' ? { background: 'black', color: 'white' } : {}} onClick={() => setDataFillter('Indent')}>Indent</span>
                                <span style={dataFillter == 'Request' ? { background: 'black', color: 'white' } : {}} onClick={() => setDataFillter('Request')}>Request</span>
                            </div>
                        }
                        <table className={styles.productTable}>
                            <thead>
                                <tr>
                                    <th>Tgl/hari</th>
                                    <th>ID</th>
                                    <th>Name Barang</th>
                                    <th>User</th>
                                    <th>{KondisiSessionTambah && 'Jumlah'}{KondisiSessionKurang && 'Pengurangan'}{KondisiSessionKurang || KondisiSessionTambah || '+/-'}</th>
                                    {KondisiSessionTambah && <th>Eksekusi</th>}
                                    <th>Note</th>
                                    {dataFillter != 'Indent' && <th>Validasi</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {dataPending?.map((product) => {
                                    return (
                                        <tr style={product?.statusProduct ? { background: '#00afb9', fontWeight: 700 } : { background: '#f07167', fontWeight: 700 }} key={product?.id}>
                                            <td>{TimeConverter(product?.start)}</td>
                                            <td>{product?.products[0]?.id}</td>
                                            <td>{product?.products[0]?.namaBarang}</td>
                                            <td>{product?.user}</td>
                                            <td>{product?.stockBarang}</td>
                                            {KondisiSessionTambah && <td>{product?.jenisBarang}</td>}
                                            <td>{product?.note}</td>
                                            {dataFillter != 'Indent' &&
                                                <td>
                                                    {product?.jenisBarang == 'Request' ?
                                                        <>
                                                            {/* <button disabled={isLoadingProduk} onClick={() => handlePlusMinIndent(product)}>+ Indent</button>&nbsp; */}
                                                            {product?.statusProduct ? "Berhasil dikirim 😁" : <button disabled={isLoadingProduk} onClick={() => handleHapusRequest(product)}>Konfirmasi Pesan</button>}
                                                        </>
                                                        : <button className={styles.buttonconfirmasi}
                                                            style={product.jenisBarang == 'Indent' ? { display: 'none' } : {}}
                                                            disabled={isLoadingProduk}
                                                            onClick={() => handleConfirm(product)}>
                                                            {product?.statusProduct ?
                                                                KondisiSessionTambah && 'Batalkan Kurang' || KondisiSessionKurang && 'Batalkan' :
                                                                KondisiSessionTambah && 'Tambahkan' || KondisiSessionKurang && 'Konfirmasi'}</button>}
                                                </td>}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table> </>

                </div>
            </div>
        </>
    )
}
