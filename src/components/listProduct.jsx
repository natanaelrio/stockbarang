'use client'
import { useState, useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import jsQR from 'jsqr'; // Import pustaka jsQR untuk membaca barcode dari video
import styles from '@/components/listProduct.module.css';

export default function ListProduct({ data }) {
    const [input, setInput] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const barcodeRefs = useRef({});
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isScanning, setIsScanning] = useState(false);

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
        if (isScanning) {
            startScanner();
        } else {
            stopScanner();
        }
    }, [isScanning]);

    const startScanner = () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({
                video: { facingMode: "environment" } // Menggunakan kamera belakang
            })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                    scanBarcode(); // Mulai scanning saat kamera aktif
                })
                .catch((err) => {
                    console.error("Tidak bisa mengakses kamera", err);
                });
        }
    };

    const stopScanner = () => {
        if (videoRef.current?.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
        }
    };

    const scanBarcode = () => {
        if (!isScanning || !videoRef.current || !canvasRef.current) return;

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

        if (code) {
            const product = data.find((item) => item.id === code.data);
            if (product) {
                setSelectedProduct(product);
                setIsScanning(false); // Berhenti scanning setelah menemukan barcode
                return;
            }
        }

        requestAnimationFrame(scanBarcode);
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
                            <svg width={100} ref={(el) => barcodeRefs.current[selectedProduct.id] = el}></svg>
                        </div>
                        <button onClick={() => setSelectedProduct(null)}>Tutup</button>
                    </div>
                </>
            )}

            {!isScanning ? (
                <button onClick={() => setIsScanning(true)} className={styles.tombolscan}>Mulai Pemindaian Barcode</button>
            ) : (
                <button onClick={() => setIsScanning(false)} className={styles.tombolscan}>Berhenti Pemindaian</button>
            )}

            <div style={{ display: isScanning ? 'block' : 'none' }}>
                <div className={styles.scanvideo}>
                    <video ref={videoRef} style={{ width: '100%' }} />
                    <canvas ref={canvasRef} style={{ display: 'none' }} />
                </div>
            </div>
        </>
    );
}
