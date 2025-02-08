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
                <p><strong className={styles.juduldetail}>{dataSelectedProduct.namaBarang}</strong></p>
                <div className={styles.gambarbarcode}>
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
