"use client"
import styles from '@/components/listProduct.module.css';
import { TimeConverter } from '@/utils/formatMoment';
import { CreateActivity, UpdateDecrement, UpdateIncrement } from '@/service/data';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Pending({ data }) {
    const router = useRouter()

    const handleConfirm = async (product) => {
        const isConfirmed = window.confirm(`Apakah Anda yakin ingin mengonfirmasi ${product.products[0].name_barang}?`);
        if (isConfirmed) {
            const FetchData = async () => {
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
                            userActivity: 'rio final',
                            activity: `Konfirmasi Update Kurang ${product.stock_barang} stock - ${product.products[0]?.name_barang} ( ${product.products[0]?.id} ) `
                        }) :
                        await CreateActivity({
                            userActivity: 'rio final',
                            activity: `Konfirmasi Update Tambah ${product.stock_barang} stock - ${product.products[0]?.name_barang} ( ${product.products[0]?.id} ) `
                        })
                } catch (e) {
                    throw new Error("Server error, gagal menyimpan produk.");
                }
            }
            toast.promise(
                FetchData(),
                {
                    loading: 'Saving...',
                    success: <b>{product.products[0].name_barang}, Berhasil!</b>,
                    error: <b>ID : {product.products[0]?.id} syudah adaww....</b>,
                }
            );
        }
        router.refresh()
    };

    return (
        <div className={styles.tableContainer}>
            <table className={styles.productTable}>
                <thead>
                    <tr>
                        <th>Tgl/hari</th>
                        <th>ID</th>
                        <th>Name Barang</th>
                        <th>User</th>
                        <th>Pengurangan</th>
                        <th>Note</th>
                        <th>Validasi</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((product) => {
                        return (
                            <tr style={product?.statusProduct ? { background: '#00afb9', fontWeight: 700 } : { background: '#f07167', fontWeight: 700 }} key={product.id}>
                                <td>{TimeConverter(product?.start)}</td>
                                <td>{product?.products[0].id}</td>
                                <td>{product?.products[0].name_barang}</td>
                                <td>{product?.user}</td>
                                <td>{product?.stock_barang}</td>
                                <td>{product?.note}</td>
                                <td>
                                    <button className={styles.buttonconfirmasi} onClick={() => handleConfirm(product)}>{product?.statusProduct ? 'Batalkan' : 'Konfirmasi'}</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
