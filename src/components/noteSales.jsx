import styles from '@/components/listProduct.module.css';
import { useState } from 'react';
import { useBearStore } from '@/zustand/data';
import toast from 'react-hot-toast';
import { CreateNotifikasiSales, DeleteListUtama, DeletePending } from '@/service/data';
import { useRouter } from 'next/navigation';

export default function NoteSales({ data }) {
    const setShowNoteSales = useBearStore((state) => state.setShowNoteSales);
    const [note, setNote] = useState('');
    const router = useRouter()

    const handleChange = (event) => {
        setNote(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const isConfirmed = window.confirm(`Apakah Anda yakin ingin mengonfirmasi Hapus ${data.products[0].name_barang}?`);
        if (isConfirmed) {

            const FetchData = async () => {
                try {
                    await CreateNotifikasiSales({
                        username: data.username,
                        namaBarang: data.products[0].name_barang,
                        jumlahBarang: data.stock_barang,
                        note: note
                    })
                    await DeleteListUtama(data.products[0].id)
                    await DeletePending(data.id)
                    router.refresh()
                    setShowNoteSales()
                } catch (e) {
                    setShowNoteSales()
                    throw new Error("Server error, gagal menyimpan produk.");
                }
            }
            toast.promise(
                FetchData(),
                {
                    loading: 'Saving...',
                    success: <b>{data.products[0].name_barang}, Berhasil di hapus dan notif ke {session.username}</b>,
                    error: <b>ID : gagal ulangg!!....</b>,
                })
        }
    };

    return (
        <>
            <div className={styles.bghitam} onClick={() => setShowNoteSales()}></div>
            <form className={styles.inputbarang}>
                <b>Barang: {data.products[0].name_barang}</b>
                <b>Jumlah: {data.stock_barang}</b>
                <b>User: {data.user}</b>
                <b>username: {data.username}</b>
                <input
                    type='text'
                    placeholder='Alasan dibatalkan...'
                    value={note}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit} type='submit'>Submit</button>
                <div className={styles.close} onClick={() => setShowNoteSales()}>X</div>
            </form>
        </>
    );
}