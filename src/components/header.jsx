'use client'
import { signOut } from "next-auth/react";
import styles from '@/components/header.module.css';
import { useState } from 'react';
import { GetSearchProduct } from "@/service/data";
import { useBearStore } from '@/zustand/data';

export default function Header({ session }) {
    const [isLoading, setLoading] = useState(false);
    const [isLoadingCari, setLoadingCari] = useState(false);
    const [search, setSearch] = useState('');
    const setDataProduk = useBearStore((state) => state.setDataProduk);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            setLoadingCari(true)
            const res = await GetSearchProduct(search)
            setDataProduk(res)
            setLoadingCari(false)
        }
        catch (e) {
            setLoadingCari(false)

        }
    };

    return (
        <div className={styles.atas}>
            <div className={styles.dalamcontainer}>
                <div>
                    {session?.username} {isLoadingCari && 'Loading...'}
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
    );
}
