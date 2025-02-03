"use client"
import { useState, useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import styles from '@/components/listProduct.module.css';
import BarcodeScanner from '@/components/barcode';
import { CreateProduct, GetSearchProduct, UpdateDecrement, UpdateIncrement } from '@/service/data';
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


    // inputBarang
    const [idInput, setIdInput] = useState('')
    const [namaBarangInput, setNamaBarangInput] = useState('')
    const [isLoadingInput, setIsLoadingInput] = useState(false)

    const handleBarangInput = () => {
        setIsLoadingInput(true)
        const FetchData = async () => {
            const res = await CreateProduct({
                "id": idInput,
                "name_barang": namaBarangInput,
                "stock_barang": 0
            })
            if (!res || res.status === 500) {
                throw new Error("Server error, gagal menyimpan produk.");
            }
        }
        setIsLoadingInput(false)
        toast.promise(
            FetchData(),
            {
                loading: 'Saving...',
                success: <b>{namaBarangInput}, Berhasil ditambakan!</b>,
                error: <b>ID : {idInput} syudah adaww....</b>,
            }
        );
        router.refresh()
        setInput(!input)
    }

    //Lainnya
    const [valueIdBarang, setValueIdBarang] = useState('')
    const [scannedData, setScannedData] = useState(null);
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

    console.log(scannedData);

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
            try {
                isTambahKurang && await UpdateIncrement({
                    id: dataBarcode[0]?.id,
                    stock: valueTambahKurang
                })
                !isTambahKurang && await UpdateDecrement({
                    id: dataBarcode[0]?.id,
                    stock: valueTambahKurang
                })
            } catch (e) {
                throw new Error("Server error, gagal update stock.");
            }
        }
        toast.promise(
            FetchData(),
            {
                loading: 'Saving...',
                success: <b>Berhasil {isTambahKurang ? 'ditambahkan' : 'dikurangi'} {valueTambahKurang}!</b>,
                error: <b>Could not save.</b>,
            }
        );
        router.refresh()
        setCameraBarcode(!cameraBarcode)
        setIsLoading(false)
    }

    const TombolScan = () => {
        setCameraBarcode(!input)
        setDataBarcode([])
        setIsTambahKurang(null)
        setHiddenCamera(true)
        setIsLoading(false)
        setNoData('')
        setScannedData(null)
    }

    const TombolTambahkan = () => {
        setInput(!input)
        setIdInput('')
        setNamaBarangInput('')
        setIsLoadingInput(false)
        setScannedData(null)
    }

    return (
        <>
            <button className={styles.tombolscan} onClick={TombolScan}>Scan</button>
            <button className={styles.tambahproduct} onClick={TombolTambahkan}>Tambahkan Product</button>
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
                        {!scannedData && <BarcodeScanner onScan={(data) => setScannedData(data)} />}
                        <input disabled={isLoadingInput} type='text' value={idInput} onChange={(e) => setIdInput(scannedData ? scannedData : e.target.value)} placeholder='ID BARANG' name='idBarang' />
                        <input disabled={isLoadingInput} type='text' onChange={(e) => setNamaBarangInput(e.target.value)} placeholder='NAMA BARANG' name='namaBarang' />
                        <button disabled={isLoadingInput} onClick={handleBarangInput} type='submit'>Submit</button>
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
                        {!Boolean(dataBarcode.length) &&
                            <>
                                <BarcodeScanner onScan={(data) => setScannedData(data)} />
                                <form className={styles.inputkamera}>
                                    <input disabled={isLoading} onChange={(e) => setValueIdBarang(e.target.value)} type='text' placeholder='ID Barang' name='IdBarang' />
                                    <button onClick={handleIdBarang} disabled={isLoading} type='submit'>Cari</button>
                                </form>
                            </>
                        }
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
