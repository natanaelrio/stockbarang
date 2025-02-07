import styles from '@/components/listProduct.module.css';
import { useState } from 'react';
import { useBearStore } from '@/zustand/data';
import toast from 'react-hot-toast';
import { CreateNotifikasiSales, DeleteListUtama, DeletePending, CreateActivity } from '@/service/data';
import { useRouter } from 'next/navigation';

export default function NoteSales({ data }) {
    const setShowNoteSales = useBearStore((state) => state.setShowNoteSales);
    const setIsLoadingProduk = useBearStore((state) => state.setIsLoadingProduk);
    const isLoadingProduk = useBearStore((state) => state.isLoadingProduk);
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
                setIsLoadingProduk(true)
                try {
                    await CreateNotifikasiSales({
                        username: data?.username,
                        namaBarang: data?.products[0].name_barang,
                        jumlahBarang: data?.stock_barang,
                        note: `dibatalkan ${data?.datauser} karena ` + note
                    })
                    await DeleteListUtama(data?.products[0].id)
                    await DeletePending(data?.id)
                    await CreateActivity({
                        userActivity: session.namaUser,
                        activity: `Konfirmasi Pembatalan(Request ${data?.user}) ${data?.stock_barang} stock - ${data?.products[0]?.name_barang} karena ${note} ( ${data?.products[0]?.id} )  `
                    })
                    router.refresh()
                    setShowNoteSales()
                    setIsLoadingProduk(false)
                } catch (e) {
                    setShowNoteSales()
                    setIsLoadingProduk(false)
                    throw new Error("Server error, gagal menyimpan produk.");
                }
            }
            toast.promise(
                FetchData(),
                {
                    loading: 'Saving...',
                    success: <b>{data?.products[0].name_barang}, Berhasil di hapus dan notif ke {session.username}</b>,
                    error: <b>ID : gagal ulangg!!....</b>,
                })
        }
    };

    return (
        <>
            <div className={styles.bghitam} onClick={() => setShowNoteSales()}></div>
            <form className={styles.inputbarang}>
                <b>Barang: {data?.products[0].name_barang}</b>
                <b>Jumlah: {data?.stock_barang}</b>
                <b>User: {data?.user}</b>
                <b>username: {data?.username}</b>
                <input
                    type='text'
                    placeholder='Alasan dibatalkan...'
                    value={note}
                    onChange={handleChange}
                    disabled={isLoadingProduk}
                />
                <button onClick={handleSubmit} disabled={isLoadingProduk} type='submit'>{!isLoadingProduk ? 'Submit' : 'Loading...'}</button>
                <div className={styles.close} onClick={() => setShowNoteSales()}>X</div>
            </form>
        </>
    );
}