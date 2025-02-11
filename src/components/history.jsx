import styles from '@/components/listProduct.module.css';
import { TimeConverter } from '@/utils/formatMoment';

export default function History({ data, param }) {

    console.log(data);

    return (
        <div className={styles.containerlist}>
            <div className={styles.tableContainer}>
                <div className={styles.history}>
                    <h1>{param == 333 && 'Barang Keluar'}</h1>
                    <h1>   {data[0]?.namaBarang}</h1>
                </div>
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
                                    <td style={{ width: '50px' }}>{TimeConverter(product?.pendingProduct[0]?.start)}</td>
                                    <td style={{ width: '50px' }}>{product?.pendingProduct[0]?.user}</td>
                                    <td style={{ width: '50px' }}>{product?.pendingProduct[0]?.stockBarang}</td>
                                    <td>{product?.pendingProduct[0]?.note}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
