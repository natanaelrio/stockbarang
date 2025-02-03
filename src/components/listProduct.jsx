"use client"
import { useState, useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import styles from '@/components/listProduct.module.css';
import jsQR from 'jsqr'; // Import pustaka jsQR untuk membaca barcode dari stream video

export default function ListProduct({ data }) {
    const [input, setInput] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(false);
    const barcodeRefs = useRef({});
    const videoRef = useRef(null); // Ref untuk video stream
    const canvasRef = useRef(null); // Ref untuk canvas untuk membaca QR/Barcode
    const [isScanning, setIsScanning] = useState(false); // Mengatur status pemindaian

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

    const startScanner = () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({
                video: { facingMode: { exact: "environment" } } // Menggunakan kamera belakang
            })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                    setIsScanning(true);
                    scanBarcode(); // Mulai pemindaian setelah stream dimulai
                })
                .catch((err) => {
                    console.error("Tidak bisa mengakses kamera", err);
                });
        }
    };

    const stopScanner = () => {
        const stream = videoRef.current.srcObject;
        const tracks = stream?.getTracks();
        tracks?.forEach((track) => track.stop());
        setIsScanning(false);
    };

    const scanBarcode = () => {
        if (isScanning && videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, canvas.width, canvas.height, {
                inversionAttempts: 'dontInvert',
            });

            console.log(code);
            if (code) {
                // Temukan produk berdasarkan data barcode yang dipindai
                const product = data.find((item) => item.id === code.data);
                if (product) {
                    setSelectedProduct(product);
                    stopScanner(); // Berhenti setelah menemukan barcode
                }
            } else {
                // Lanjutkan pemindaian jika barcode tidak ditemukan
                requestAnimationFrame(scanBarcode);
            }
        }
    };

    return (
        <>
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

            {!isScanning ? (
                <button onClick={startScanner} className={styles.tombolscan}>Mulai Pemindaian Barcode</button>
            ) : (
                <button onClick={stopScanner} className={styles.tombolscan}>Berhenti Pemindaian</button>
            )}

            {/* Elemen Video dan Canvas untuk Pemindaian Barcode */}
            <div style={{ display: isScanning ? 'block' : 'none' }}>
                <div className={styles.scanvideo}>
                    <video ref={videoRef} style={{ width: '100%' }} />
                    <canvas ref={canvasRef} style={{ display: 'none' }} />
                </div>
            </div>
        </>
    );
}
