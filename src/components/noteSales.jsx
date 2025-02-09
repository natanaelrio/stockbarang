import styles from '@/components/listProduct.module.css';
import { useState } from 'react';
import { useBearStore } from '@/zustand/data';
import toast from 'react-hot-toast';
import { CreateNotifikasiSales, DeleteListUtama, DeletePending, CreateActivity, UpdateStatusPending } from '@/service/data';
import { useRouter } from 'next/navigation';

export default function NoteSales({ data }) {
    const setShowNoteSales = useBearStore((state) => state.setShowNoteSales);
    const setIsLoadingProduk = useBearStore((state) => state.setIsLoadingProduk);
    const isLoadingProduk = useBearStore((state) => state.isLoadingProduk);
    const setRefreshData = useBearStore((state) => state.setRefreshData);
    const [note, setNote] = useState('');
    const router = useRouter()
    const handleChange = (event) => {
        setNote(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isConfirmed = window.confirm(`Apakah Anda yakin ingin mengonfirmasi ${data.products[0].namaBarang}?`);
        if (isConfirmed) {
            const FetchData = async () => {
                setIsLoadingProduk(true)
                try {
                    await CreateNotifikasiSales({
                        username: data?.username,
                        namaBarang: data?.products[0].namaBarang,
                        jumlahBarang: data?.stockBarang,
                        note: `( ${data?.datauser} )` + note
                    })
                    await UpdateStatusPending({
                        idPending: data.id,
                        statusProduct: !data.statusProduct
                    })
                    // await DeleteListUtama(data?.products[0].id)
                    // await DeletePending(data?.id)
                    await CreateActivity({
                        userActivity: data?.datauser,
                        activity: `Kirim Pesan ${data?.user}) ${data?.stockBarang} stock - ${data?.products[0]?.namaBarang} ( ${data?.products[0]?.id} ) karena ${note}   `
                    })
                    router.refresh()
                    setRefreshData()
                    setIsLoadingProduk(false)
                    setShowNoteSales()
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
                    success: <b>{data?.products[0].namaBarang}, Berhasil di hapus dan notif ke {session.username}</b>,
                    error: <b>ID : gagal ulangg!!....</b>,
                })
        }
    };

    return (
        <>
            <div className={styles.bghitam} onClick={() => setShowNoteSales()}></div>
            <form className={styles.inputbarang}>
                <b>Barang: {data?.products[0].namaBarang}</b>
                <b>Jumlah: {data?.stockBarang}</b>
                <b>User: {data?.user}</b>
                <b>username: {data?.username}</b>
                <input
                    type='text'
                    placeholder='Kirim Pesan...'
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