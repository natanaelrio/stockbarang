"use client"
import { useState, useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import styles from '@/components/listProduct.module.css';
import BarcodeScanner from '@/components/barcode';
import { GetSearchProduct, UpdateDecrement, UpdateIncrement } from '@/service/data';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ListProduct({ data }) {
    const router = useRouter()
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


    const [valueIdBarang, setValueIdBarang] = useState('')
    const [scannedData, setScannedData] = useState("");
    const [cameraBarcode, setCameraBarcode] = useState(false)
    const [dataBarcode, setDataBarcode] = useState([])
    const [Nodata, setNoData] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [hiddenCamera, setHiddenCamera] = useState(true)
    useEffect(() => {
        const FetchData = async () => {
            setIsLoading(true)
            const data = await GetSearchProduct(scannedData)
            setDataBarcode(data.data)
            setIsLoading(false)
        }
        FetchData()
    }, [scannedData])

    const handleIdBarang = async (e) => {
        e.preventDefault()
        setHiddenCamera(false)
        setIsLoading(true)
        const data = await GetSearchProduct(valueIdBarang)
        setDataBarcode(data.data)
        setNoData(data.dataLength)
        setIsLoading(false)
    }

    const [isTambahKurang, setIsTambahKurang] = useState(null)
    const [valueTambahKurang, setValueTambahKurang] = useState('')

    const handleTambahKurang = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const FetchData = async () => {
            isTambahKurang && await UpdateIncrement({
                id: dataBarcode[0]?.id,
                stock: valueTambahKurang
            })
            !isTambahKurang && await UpdateDecrement({
                id: dataBarcode[0]?.id,
                stock: valueTambahKurang
            })
        }
        toast.promise(
            FetchData(),
            {
                loading: 'Saving...',
                success: <b>Settings saved!</b>,
                error: <b>Could not save.</b>,
            }
        );
        router.refresh()
        // setCameraBarcode(!cameraBarcode)
        setIsLoading(false)
    }

    const TombolScan = () => {
        setCameraBarcode(!input)
        setDataBarcode([])
        setIsTambahKurang(null)
        setHiddenCamera(true)
        setIsLoading(false),
            setNoData('')
    }

    return (
        <>
            <button className={styles.tombolscan} onClick={TombolScan}>Scan</button>
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
                        {hiddenCamera && <BarcodeScanner onScan={(data) => setScannedData(data)} />}
                        <form className={styles.inputkamera}>
                            <input disabled={isLoading} onChange={(e) => setValueIdBarang(e.target.value)} type='text' placeholder='ID Barang' name='IdBarang' />
                            <button onClick={handleIdBarang} disabled={isLoading} type='submit'>Cari</button>
                        </form>
                        {isLoading && <p><strong>Loading...</strong></p>}
                        {Nodata == 'Tidak ada Produk' && Nodata}
                        {Boolean(dataBarcode.length) &&
                            <>
                                <h3>Detail Produk</h3>
                                <p><strong>ID: {dataBarcode[0]?.id}</strong></p>
                                <p><strong>Nama Barang:{dataBarcode[0]?.name_barang}</strong></p>
                                <p><strong>Stok Barang:{dataBarcode[0]?.stock_barang}</strong></p>
                                <span>
                                    <button onClick={() => setIsTambahKurang(true)}>Tambah +</button>
                                    <button onClick={() => setIsTambahKurang(false)}>Kurang -</button>
                                    {isTambahKurang !== null &&
                                        <form className={styles.inputkamera}>
                                            <input disabled={isLoading} onChange={(e) => setValueTambahKurang(e.target.value)} type='text' placeholder={isTambahKurang ? 'Tambahi ++' : 'Kurangi--'} name='IdBarang' />
                                            <button disabled={isLoading} onClick={handleTambahKurang} type='submit'>Submit</button>
                                        </form>
                                    }
                                </span>
                            </>
                        }
                        <div className={styles.close} onClick={() => setCameraBarcode(null)}>X</div>
                    </div>
                </>
            )}

        </>
    );
}
