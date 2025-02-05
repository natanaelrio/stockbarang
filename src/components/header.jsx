'use client'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import styles from '@/components/header.module.css';
import { useState } from 'react';

export default function Header() {
    const { data: session } = useSession();
    const [isLoading, setLoading] = useState(false)
    return (
        <div className={styles.atas}>
            <div className={styles.dalamcontainer}>
                <div className={styles.user}>
                    {session?.username}
                </div>
                <button onClick={() => { signOut(), setLoading(!isLoading) }} >
                    {isLoading ? 'Loading...' : 'Logout'}
                </button>
            </div>
        </div>
    )
}
