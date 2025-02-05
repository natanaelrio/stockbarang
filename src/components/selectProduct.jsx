'use client'
import styles from '@/components/listProduct.module.css';
import JsBarcode from 'jsbarcode';
import { useBearStore } from '@/zustand/data';
import { useEffect, useRef } from 'react';

export default function SelectProduct() {
    const setShowSelectedProduct = useBearStore((state) => state.setShowSelectedProduct);
    const dataSelectedProduct = useBearStore((state) => state.dataSelectedProduct);

    const barcodeRefs = useRef({});

    useEffect(() => {
        if (dataSelectedProduct) {
            const barcodeElement = barcodeRefs.current[dataSelectedProduct.id];
            if (barcodeElement) {
                JsBarcode(barcodeElement, dataSelectedProduct.id, {
                    format: 'CODE128',
                    displayValue: true,
                });
            }
        }
    }, [dataSelectedProduct]);


    return (
        <>
            <div className={styles.bghitam} onClick={() => setShowSelectedProduct()}></div>
            <div className={styles.inputbarang}>
                <h3>Detail Produk</h3>
                <p><strong>ID:</strong> {dataSelectedProduct.id}</p>
                <p><strong>Nama Barang:</strong> {dataSelectedProduct.name_barang}</p>
                <p><strong>Stok Barang:</strong> {dataSelectedProduct.stock_barang}</p>
                <div>
                    {/* <strong>Barcode:</strong> */}
                    <svg
                        width={100}
                        ref={(el) => barcodeRefs.current[dataSelectedProduct.id] = el}
                    ></svg>
                </div>
                <button onClick={() => setShowSelectedProduct()}>Tutup</button>
            </div>
        </>
    )
}
