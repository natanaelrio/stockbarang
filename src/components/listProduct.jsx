"use client"
import { useState, useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import styles from '@/components/listProduct.module.css';
import { BrowserMultiFormatReader, BrowserBarcodeReader } from "@zxing/library";
import BarcodeScanner from './barcode';
import { GetSearchProduct } from '@/service/data';

export default function ListProduct({ data }) {
    const [input, setInput] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(false);
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

    useEffect(() => {
        if (selectedProduct) {
            const barcodeElement = barcodeRefs.current[selectedProduct.id];
            if (barcodeElement) {
                JsBarcode(barcodeElement, selectedProduct.id, {
                    format: 'CODE128',
                    displayValue: true,
                });
            }
        }
    }, [selectedProduct]);

    const handleBarcodeClick = (product) => {
        setSelectedProduct(product);
    };

    const [scannedData, setScannedData] = useState("");
    const [cameraBarcode, setCameraBarcode] = useState(false)
    const [dataBarcode, setDataBarcode] = useState([])
    useEffect(() => {
        const FetchData = async () => {
            const data = await GetSearchProduct(scannedData)
            setDataBarcode(data.data[0])
        }
        FetchData()
    }, [scannedData])

    return (
        <>
            <button className={styles.tombolscan} onClick={() => setCameraBarcode(!input)}>Scan</button>
            <button className={styles.tambahproduct} onClick={() => setInput(!input)}>Tambahkan Product</button>
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

            {input && (
                <>
                    <div className={styles.bghitam} onClick={() => setInput(!input)}></div>
                    <form className={styles.inputbarang}>
                        <input type='text' placeholder='ID BARANG' name='idBarang' />
                        <input type='text' placeholder='NAMA BARANG' name='namaBarang' />
                        <button type='submit'>Submit</button>
                        <div className={styles.close} onClick={() => setInput(!input)}>X</div>
                    </form>
                </>
            )}

            {selectedProduct && (
                <>
                    <div className={styles.bghitam} onClick={() => setSelectedProduct(null)}></div>
                    <div className={styles.inputbarang}>
                        <h3>Detail Produk</h3>
                        <p><strong>ID:</strong> {selectedProduct.id}</p>
                        <p><strong>Nama Barang:</strong> {selectedProduct.name_barang}</p>
                        <p><strong>Stok Barang:</strong> {selectedProduct.stock_barang}</p>
                        <div>
                            <strong>Barcode:</strong>
                            <svg
                                width={100}
                                ref={(el) => barcodeRefs.current[selectedProduct.id] = el}
                            ></svg>
                        </div>
                        <button onClick={() => setSelectedProduct(null)}>Tutup</button>
                    </div>
                </>
            )}

            {cameraBarcode && (
                <>
                    <div className={styles.bghitam} onClick={() => setCameraBarcode(null)}></div>
                    <div className={styles.inputbarang}>
                        <BarcodeScanner onScan={(data) => setScannedData(data)} />
                        {scannedData &&
                            <>
                                <h3>Detail Produk</h3>
                                <p><strong>ID: {scannedData}</strong></p>
                                <p><strong>Nama Barang:{dataBarcode.name_barang}</strong></p>
                                <p><strong>Stok Barang:{dataBarcode.stock_barang}</strong></p>
                            </>
                        }
                        <button onClick={() => setCameraBarcode(null)}>Tutup</button>
                    </div>
                </>
            )}

        </>
    );
}
