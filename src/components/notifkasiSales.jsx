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
                            <th>Pesan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td style={{ width: '50px' }}>{TimeConverter(product?.start)}</td>
                                    <td style={{ width: '50px' }}>{product?.namaBarang}</td>
                                    <td style={{ width: '50px' }}>{product?.jumlahBarang}</td>
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
