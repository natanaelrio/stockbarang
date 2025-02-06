"use client"
import styles from '@/components/listProduct.module.css';
import { TimeConverter } from '@/utils/formatMoment';

export default function NotifikasiSales({ data }) {
    return (
        <div className={styles.containerlist}>
            <div className={styles.tableContainer}>
                <table className={styles.productTable}>
                    <thead>
                        <tr>
                            <th>Tgl/hari</th>
                            <th>Nama Barang</th>
                            <th>Jumlah</th>
                            <th>Note ditolak</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{TimeConverter(product?.start)}</td>
                                    <td>{product?.namaBarang}</td>
                                    <td>{product?.jumlahBarang}</td>
                                    <td>{product?.note}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
