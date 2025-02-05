"use client"
import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import styles from '@/components/listProduct.module.css';
import { useBearStore } from '@/zustand/data';
import InputBarang from '@/components/inputBarang';
import SelectProduct from '@/components/selectProduct';
import ScanCameraBarcode from '@/components/scanCameraBarcode';
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
export default function ListProduct({ data }) {
    const { data: session } = useSession();
    const roles = session?.role || [];
    const KondisiSessionTambah = roles.includes('tambah')

    const scannedData = useBearStore((state) => state.scannedData)
    const setScannedData = useBearStore((state) => state.setScannedData)

    const showInputBarang = useBearStore((state) => state.showInputBarang)
    const setShowInputBarang = useBearStore((state) => state.setShowInputBarang)

    const setShowSelectedProduct = useBearStore((state) => state.setShowSelectedProduct);
    const showSelectedProduct = useBearStore((state) => state.showSelectedProduct);
    const setScanShowCameraBarcode = useBearStore((state) => state.setScanShowCameraBarcode);
    const showScanCameraBarcode = useBearStore((state) => state.showScanCameraBarcode);

    const setDataSelectedProduct = useBearStore((state) => state.setDataSelectedProduct);

    const barcodeRefs = useRef({});

    useEffect(() => {
        data.forEach((product) => {
            const barcodeElement = barcodeRefs.current[product.id];
            if (barcodeElement) {
                JsBarcode(barcodeElement, product.id, {
                    format: 'CODE128',
                    displayValue: true,
                });
            }
        });
    }, [data]);


    const handleBarcodeClick = (product) => {
        setShowSelectedProduct()
        setDataSelectedProduct(product);
    };


    const TombolScan = () => {
        setScanShowCameraBarcode()
    }

    const TombolTambahkan = () => {
        setShowInputBarang()
        setScannedData(null)
    }

    return (
        <>
            <button onClick={() => signOut()} style={{ padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
                Logout
            </button>
            <button className={styles.tombolscan} onClick={TombolScan}>Scan</button>
            {KondisiSessionTambah && <button className={styles.tambahproduct} onClick={TombolTambahkan}>Tambahkan Product</button>}
            <div className={styles.tableContainer}>
                <table className={styles.productTable}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name Barang</th>
                            <th>Stock Barang</th>
                            <th>Barcode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name_barang}</td>
                                <td>{product.stock_barang}</td>
                                <td>
                                    <svg
                                        width={100}
                                        ref={(el) => barcodeRefs.current[product.id] = el}
                                        data-id={product.id}
                                        onClick={() => handleBarcodeClick(product)}
                                    ></svg>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showInputBarang && <InputBarang />}

            {showSelectedProduct && <SelectProduct />}

            {showScanCameraBarcode && <ScanCameraBarcode />
            }
        </>
    );
}
