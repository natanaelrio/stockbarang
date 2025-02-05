'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '@/components/listProduct.module.css';
import BarcodeScanner from '@/components/barcode';
import { useBearStore } from '@/zustand/data';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { CreateActivity, CreateProduct } from '@/service/data';
import { useState } from 'react';
import { GetCurrentDateTimeGMT7 } from '@/utils/getCurrentDateTimeGMT7';

export default function InputBarang() {
    const router = useRouter();
    const setShowInputBarang = useBearStore((state) => state.setShowInputBarang);
    const scannedData = useBearStore((state) => state.scannedData);
    const setScannedData = useBearStore((state) => state.setScannedData);
    const [showScan, setShowScan] = useState(false)

    const formik = useFormik({
        initialValues: {
            idBarang: scannedData ? scannedData : GetCurrentDateTimeGMT7(),
            namaBarang: '',
        },
        validationSchema: Yup.object({
            idBarang: Yup.string().required('ID Barang wajib diisi'),
            namaBarang: Yup.string().required('Nama Barang wajib diisi'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const FetchData = async () => {
                    const dataProduct = await CreateProduct({
                        id: values.idBarang,
                        name_barang: values.namaBarang,
                        stock_barang: 0,
                    });
                    if (dataProduct.status == '500') {
                        throw new Error(`id ${values.idBarang} sudah ada !!`);
                        return
                    }
                    await CreateActivity({
                        userActivity: 'rio',
                        activity: `Penambahan Product ${values.namaBarang} ( ${values.idBarang} )`
                    });
                }
                toast.promise(
                    FetchData(),
                    {
                        loading: 'Saving...',
                        success: <b>Berhasil {values.namaBarang} ditambahkan !</b>,
                        error: `id ${values.idBarang} sudah ada !!`,
                    }
                );
                router.refresh();
                setShowInputBarang();
            } catch (error) {
                toast.error(`ID: ${values.idBarang} sudah ada!`);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <>
            <div className={styles.bghitam} onClick={() => setShowInputBarang()}></div>
            <form className={styles.inputbarang} onSubmit={formik.handleSubmit}>
                {!scannedData && showScan && <BarcodeScanner onScan={(data) => setScannedData(data)} />}
                <button onClick={() => setShowScan(!showScan)} >{!showScan ? 'Input ID SCAN' : 'Tutup Input ID SCAN'}</button>
                <input
                    type='text'
                    name='idBarang'
                    placeholder='ID BARANG'
                    value={formik.values.idBarang}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting}
                />
                {formik.touched.idBarang && formik.errors.idBarang ? <div className={styles.error}>{formik.errors.idBarang}</div> : null}

                <input
                    type='text'
                    name='namaBarang'
                    placeholder='NAMA BARANG'
                    value={formik.values.namaBarang}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting}
                />
                {formik.touched.namaBarang && formik.errors.namaBarang ? <div className={styles.error}>{formik.errors.namaBarang}</div> : null}

                <button type='submit' disabled={formik.isSubmitting}>Submit</button>
                <div className={styles.close} onClick={() => setShowInputBarang()}>X</div>
            </form>
        </>
    );
}
