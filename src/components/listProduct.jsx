"use client"
import styles from '@/components/listProduct.module.css';
import { useBearStore } from '@/zustand/data';
import { useEffect } from 'react';
import { GetProduct } from '@/service/dataClient'

export default function ListProduct() {
    const setShowSelectedProduct = useBearStore((state) => state.setShowSelectedProduct);
    const setDataSelectedProduct = useBearStore((state) => state.setDataSelectedProduct);
    const dataProduk = useBearStore((state) => state.dataProduk);
    const setDataProduk = useBearStore((state) => state.setDataProduk);
    const setIsLoadingProduk = useBearStore((state) => state.setIsLoadingProduk);
    const isLoadingProduk = useBearStore((state) => state.isLoadingProduk);
    const refreshData = useBearStore((state) => state.refreshData);

    const handleBarcodeClick = (product) => {
        setShowSelectedProduct()
        setDataSelectedProduct(product);
    };

    useEffect(() => {
        const FetchData = async () => {
            try {
                setIsLoadingProduk(true)
                const data = await GetProduct()
                setDataProduk(data)
                setIsLoadingProduk(false)
            }
            catch (e) {
                setIsLoadingProduk(false)
            }
        }
        FetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshData])

    return (
        <>
            <div className={styles.containerlist}>
                <div className={styles.tableContainer}>
                    <div styleName={styles.datalength}>
                        {dataProduk?.dataLength}
                    </div>
                    {!isLoadingProduk ?
                        <table className={styles.productTable}>
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>ID</th>
                                    <th>Name Barang</th>
                                    <th>Gudang 94</th>
                                    <th>Gudang 29</th>
                                    <th>Gudang Surabaya</th>
                                    <th>Total Produk</th>
                                    <th>Indent Barang</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataProduk?.data?.map((product, i) => {
                                    return (
                                        <tr tr key={product?.id} onClick={() => handleBarcodeClick(product)}>
                                            <td>{i + 1}</td>
                                            <td>{product?.id}</td>
                                            <td>{product?.namaBarang}</td>
                                            <td>{product?.produkGedung?.find((item) => item?.gedungId == 11111)?.stockBarang}</td>
                                            <td>{product?.produkGedung?.find((item) => item?.gedungId == 22222)?.stockBarang}</td>
                                            <td>{product?.produkGedung?.find((item) => item?.gedungId == 33333)?.stockBarang}</td>
                                            <td>
                                                {product?.produkGedung
                                                    ?.filter((item) => [11111, 22222, 33333].includes(item?.gedungId))
                                                    .reduce((total, item) => total + (item?.stockBarang || 0), 0)}
                                            </td>
                                            <td>{product?.produkGedung?.find((item) => item?.gedungId == 10000)?.stockBarang}</td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table> :
                        <div>Loading...</div>
                    }

                </div>
            </div >
        </>
    );
}
