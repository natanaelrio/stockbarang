"use client"
import styles from '@/components/listProduct.module.css';
import { TimeConverter } from '@/utils/formatMoment';
export default function Activity({ data }) {
    return (
        <div className={styles.containerlist}>
            <div className={styles.tableContainer}>
                <table className={styles.productTable}>
                    <thead>
                        <tr>
                            <th>Tgl/hari</th>
                            <th>username</th>
                            <th>User</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td style={{ width: '50px' }}>{TimeConverter(product?.start)}</td>
                                    <td style={{ width: '50px' }}>{product?.username}</td>
                                    <td style={{ width: '50px' }}>{product?.userActivity}</td>
                                    <td>{product?.activity}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
