"use client"
import styles from '@/components/listProduct.module.css';
import { TimeConverter } from '@/utils/formatMoment';
import { CreateActivity, UpdateDecrement, UpdateIncrement, updateJenisBarang } from '@/service/data';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import NoteSales from './noteSales';
import { useBearStore } from '@/zustand/data';
import { useState } from 'react';

export default function Pending({ data, session }) {
    const router = useRouter()
    const roles = session?.role || [];
    const KondisiSessionTambah = roles.includes('verplus')
    const KondisiSessionKurang = roles.includes('vermin')
    const showNoteSales = useBearStore((state) => state.showNoteSales);
    const setShowNoteSales = useBearStore((state) => state.setShowNoteSales);

    const handleConfirm = async (product) => {
        const KondisiPlus = product.role == 'verplus'
        const KondisiMin = product.role == 'vermin'

        const isConfirmed = window.confirm(`Apakah Anda yakin ingin mengonfirmasi ${product.products[0].name_barang}?`);
        if (isConfirmed) {
            const FetchDataNormal = async () => {
                try {
                    !product.statusProduct ?
                        await UpdateDecrement({
                            id: product.products[0]?.id,
                            stock: product.stock_barang,
                            idPending: product?.id,
                            statusProduct: !product?.statusProduct,
                        }) : await UpdateIncrement({
                            id: product.products[0]?.id,
                            stock: product.stock_barang,
                            idPending: product?.id,
                            statusProduct: !product?.statusProduct,
                        })

                    !product.statusProduct ?
                        await CreateActivity({
                            userActivity: session.namaUser,
                            activity: `Konfirmasi Pengurangan ${product.stock_barang} stock - ${product.products[0]?.name_barang} ( ${product.products[0]?.id} ) `
                        }) :
                        await CreateActivity({
                            userActivity: session.namaUser,
                            activity: `Konfirmasi Pembatalan ${product.stock_barang} stock - ${product.products[0]?.name_barang} ( ${product.products[0]?.id} ) `
                        })
                } catch (e) {
                    throw new Error("Server error, gagal menyimpan produk.");
                }
            }
            KondisiMin && toast.promise(
                FetchDataNormal(),
                {
                    loading: 'Saving...',
                    success: <b>{product.products[0].name_barang}, Berhasil diUpdate!</b>,
                    error: <b>ID : {product.products[0]?.id} syudah adaww....</b>,
                }
            );

            const FetchDataPlus = async () => {
                try {
                    !product.statusProduct ?
                        await UpdateIncrement({
                            id: product.products[0]?.id,
                            stock: product.stock_barang,
                            idPending: product?.id,
                            statusProduct: !product?.statusProduct
                        }) : await UpdateDecrement({
                            id: product.products[0]?.id,
                            stock: product.stock_barang,
                            idPending: product?.id,
                            statusProduct: !product?.statusProduct,
                        })

                    !product.statusProduct ?
                        await CreateActivity({
                            userActivity: session.namaUser,
                            activity: `Konfirmasi Tambah(indent) ${product.stock_barang} stock - ${product.products[0]?.name_barang} ( ${product.products[0]?.id} ) `
                        }) :
                        await CreateActivity({
                            userActivity: session.namaUser,
                            activity: `Konfirmasi Pembatalan(indent) ${product.stock_barang} stock - ${product.products[0]?.name_barang} ( ${product.products[0]?.id} ) `
                        })

                } catch (e) {
                    throw new Error("Server error, gagal menyimpan produk.");
                }
            }
            KondisiPlus && toast.promise(
                FetchDataPlus(),
                {
                    loading: 'Saving...',
                    success: <b>{product.products[0].name_barang}, Berhasil diUpdate!</b>,
                    error: <b>ID : {product.products[0]?.id} syudah adaww....</b>,
                }
            );
        }
        router.refresh()
    };


    const handlePlusMinIndent = async (e) => {
        const FetchDataIndent = async () => {
            try {
                await updateJenisBarang({
                    id: e.id,
                    jenisBarang: 'Indent'
                })
            } catch (e) {
                throw new Error("Server error, gagal menyimpan produk.");
            }
        }
        toast.promise(
            FetchDataIndent(),
            {
                loading: 'Saving...',
                success: <b>{e.products[0].name_barang}, Berhasil diUpdate!</b>,
                error: <b>ID : gagal ulangg!!....</b>,
            })
    }

    const [dataSales, setDataSales] = useState({})
    const handleHapusRequest = async (e) => {
        setDataSales(e)
        setShowNoteSales()
    }

    return (
        <>
            <div className={styles.containerlist}>
                <div className={styles.tableContainer}>
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
                                <th>Validasi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((product) => {
                                return (
                                    <tr style={product?.statusProduct ? { background: '#00afb9', fontWeight: 700 } : { background: '#f07167', fontWeight: 700 }} key={product.id}>
                                        <td>{TimeConverter(product?.start)}</td>
                                        <td>{product?.products[0]?.id}</td>
                                        <td>{product?.products[0]?.name_barang}</td>
                                        <td>{product?.user}</td>
                                        <td>{product?.stock_barang}</td>
                                        {KondisiSessionTambah && <td>{product?.jenisBarang}</td>}
                                        <td>{product?.note}</td>
                                        <td>
                                            {product?.jenisBarang == 'Request' ?
                                                <>
                                                    <button onClick={() => handlePlusMinIndent(product)}>+ Indent</button>&nbsp;
                                                    <button onClick={() => handleHapusRequest(product)}>Hapus</button>
                                                </>
                                                : <button className={styles.buttonconfirmasi}
                                                    onClick={() => handleConfirm(product)}>
                                                    {product?.statusProduct ?
                                                        KondisiSessionTambah && 'Batalkan Kurang' || KondisiSessionKurang && 'Batalkan' :
                                                        KondisiSessionTambah && 'Tambahkan' || KondisiSessionKurang && 'Konfirmasi'}</button>}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {showNoteSales && <NoteSales data={dataSales} />}
        </>
    )
}
