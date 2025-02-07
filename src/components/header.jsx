'use client'
import { signOut } from "next-auth/react";
import styles from '@/components/header.module.css';
import { useState } from 'react';
import { GetSearchProduct } from "@/service/dataClient";
import { useBearStore } from '@/zustand/data';
import InputBarang from '@/components/inputBarang';
import SelectProduct from '@/components/selectProduct';
import ScanCameraBarcode from '@/components/scanCameraBarcode';
import NoteSales from '@/components/noteSales';

export default function Header({ session, Ksearch }) {
    const [isLoading, setLoading] = useState(false);
    const [isLoadingCari, setLoadingCari] = useState(false);
    const [search, setSearch] = useState('');
    const kondisiLengthPencarian = search.length >= 2
    const setDataProduk = useBearStore((state) => state.setDataProduk);
    const showInputBarang = useBearStore((state) => state.showInputBarang)
    const showSelectedProduct = useBearStore((state) => state.showSelectedProduct);
    const showScanCameraBarcode = useBearStore((state) => state.showScanCameraBarcode);
    const showNoteSales = useBearStore((state) => state.showNoteSales);
    const dataSales = useBearStore((state) => state.dataSales);


    const handleSearch = async (e) => {
        e.preventDefault();
        if (kondisiLengthPencarian) {
            try {
                setLoadingCari(true)
                const res = await GetSearchProduct(search)
                setDataProduk(res)
                setLoadingCari(false)
            }
            catch (e) {
                setLoadingCari(false)

            }
        }
    };

    return (
        <>
            <div className={styles.atas}>
                <div className={styles.dalamcontainer}>
                    <div>
                        {session?.namaUser} {isLoadingCari && 'Loading...'} {!kondisiLengthPencarian && Ksearch && <span style={{ color: 'red' }}>min 2 huruf</span>}
                        {Ksearch &&
                            <form onSubmit={handleSearch} className={styles.searchForm}>
                                <input
                                    type="text"
                                    placeholder="Nama Barang..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className={styles.searchInput}
                                />
                                <button disabled={isLoadingCari} type="submit">Cari</button>
                            </form>
                        }
                    </div>
                    <div className={styles.user}>
                        <div className={styles.logout} onClick={() => {
                            setLoading(true);
                            signOut();
                        }}>
                            {isLoading ? 'Loading...' : 'Logout'}
                        </div>
                    </div>

                </div>
            </div>
            {showInputBarang && <InputBarang session={session} />}
            {showSelectedProduct && <SelectProduct />}
            {showScanCameraBarcode && <ScanCameraBarcode session={session} />}
            {showNoteSales && <NoteSales data={dataSales} />}
        </>
    );
}
