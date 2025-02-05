"use client"
import styles from '@/components/listProduct.module.css';
import { useBearStore } from '@/zustand/data';
import { useEffect } from 'react';
import { GetProduct } from '@/service/dataClient'

export default function ListProduct({ data }) {
    const setShowSelectedProduct = useBearStore((state) => state.setShowSelectedProduct);
    const setDataSelectedProduct = useBearStore((state) => state.setDataSelectedProduct);
    const dataProduk = useBearStore((state) => state.dataProduk);
    const setDataProduk = useBearStore((state) => state.setDataProduk);
    const setIsLoadingProduk = useBearStore((state) => state.setIsLoadingProduk);
    const isLoadingProduk = useBearStore((state) => state.isLoadingProduk);

    const handleBarcodeClick = (product) => {
        setShowSelectedProduct()
        setDataSelectedProduct(product);
    };

    useEffect(() => {
        const FetchData = async () => {
            setIsLoadingProduk(true)
            const data = await GetProduct()
            setIsLoadingProduk(false)
            setDataProduk(data)
        }
        FetchData()
    }, [])

    return (
        <>
            <div className={styles.tableContainer}>
                <div styleName={styles.datalength}>
                    {dataProduk?.dataLength}
                </div>
                {isLoadingProduk ?
                    <table className={styles.productTable}>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>ID</th>
                                <th>Name Barang</th>
                                <th>Stock Barang</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataProduk.data?.map((product, i) => (
                                <tr key={product?.id} onClick={() => handleBarcodeClick(product)}>
                                    <td>{i + 1}</td>
                                    <td>{product?.id}</td>
                                    <td>{product?.name_barang}</td>
                                    <td>{product?.stock_barang}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> :
                    <div>Loading...</div>
                }

            </div>


        </>
    );
}
