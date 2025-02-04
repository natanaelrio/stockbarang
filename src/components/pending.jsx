"use client"
import styles from '@/components/listProduct.module.css';

export default function Pending({ data }) {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.productTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name Barang</th>
                        <th>Stock Barang</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name_barang}</td>
                            <td>{product.stock_barang}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
