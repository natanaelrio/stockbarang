'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '@/components/listProduct.module.css';
import BarcodeScanner from '@/components/barcode';
import { useBearStore } from '@/zustand/data';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { CreateActivity, CreateProduct } from '@/service/data';
import { GetCurrentDateTimeGMT7 } from '@/utils/getCurrentDateTimeGMT7';
import { useState } from "react";

export default function InputBarang({ session }) {
    const router = useRouter();
    const roles = session?.role || [];
    const KondisiSessionTambahIndent = roles.includes('tambahindent')
    const KondisiSessionSales = roles.includes('sales')

    const id = GetCurrentDateTimeGMT7()

    const setIsLoadingProduk = useBearStore((state) => state.setIsLoadingProduk);
    const isLoadingProduk = useBearStore((state) => state.isLoadingProduk);
    const setRefreshData = useBearStore((state) => state.setRefreshData);
    const setShowInputBarang = useBearStore((state) => state.setShowInputBarang);
    const scannedData = useBearStore((state) => state.scannedData);
    const setScannedData = useBearStore((state) => state.setScannedData);
    const [showScan, setShowScan] = useState(false)
    const [showIndent, setShowIndent] = useState(false)

    const formik = useFormik({
        initialValues: {
            idBarang: scannedData ? scannedData : id,
            namaBarang: '',
            stockBarang: KondisiSessionTambahIndent ? 0 : '',
            jenisBarang: KondisiSessionSales ? 'Request' : 'Langsung',
            catatanIndent: '',
        },
        enableReinitialize: scannedData ? scannedData : false,
        validationSchema: Yup.object({
            idBarang: Yup.string().required('ID Barang wajib diisi'),
            namaBarang: Yup.string().required('Nama Barang wajib diisi'),
            stockBarang: Yup.number().required('Stock Barang wajib diisi'),
            jenisBarang: Yup.string().oneOf(['Indent', 'Langsung', 'Request']).required('Jenis Barang wajib dipilih'),
        }),
        onSubmit: async (values, { setSubmitting }) => {

            try {
                const FetchDataNormal = async () => {
                    setIsLoadingProduk(true)
                    const dataProduct = await CreateProduct({
                        id: values.idBarang,
                        namaBarang: values.namaBarang,
                    });

                    if (dataProduct.status == '500') {
                        throw new Error(`ID ${values.idBarang} sudah ada !!`);
                    }

                    await CreateActivity({
                        username: session.username,
                        userActivity: session.namaUser,
                        activity: `Penambahan Product ${values.namaBarang} (${values.idBarang})`,
                    });
                    router.refresh();
                    setShowInputBarang();
                    setRefreshData()
                    setIsLoadingProduk(false)
                };
                toast.promise(
                    FetchDataNormal(),
                    {
                        loading: 'Saving...',
                        success: <b>Berhasil {values.namaBarang} ditambahkan !</b>,
                        error: `ID ${values.idBarang} sudah ada !!`,
                    }
                );


            } catch (error) {
                toast.error(`ID: ${values.idBarang} sudah ada!`);
                setShowInputBarang();
                setRefreshData()
                setIsLoadingProduk(false)
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <>
            <div className={styles.bghitam} onClick={() => setShowInputBarang()}></div>
            <form className={styles.inputbarang} onSubmit={formik.handleSubmit}>
                {showScan && <BarcodeScanner kondisiInput={true} />}
                <button disabled={isLoadingProduk} onClick={() => setShowScan(!showScan)}>{!showScan ? 'Input ID SCAN' : 'Tutup Input ID SCAN'}</button>
                <input
                    type='text'
                    name='idBarang'
                    placeholder='ID BARANG'
                    value={formik.values.idBarang}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={isLoadingProduk}
                />
                {formik.touched.idBarang && formik.errors.idBarang ? <div className={styles.error}>{formik.errors.idBarang}</div> : null}

                <input
                    type='text'
                    name='namaBarang'
                    placeholder='NAMA BARANG'
                    value={formik.values.namaBarang}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={isLoadingProduk}
                />
                {formik.touched.namaBarang && formik.errors.namaBarang ? <div className={styles.error}>{formik.errors.namaBarang}</div> : null}

                {!KondisiSessionTambahIndent && <input
                    type='number'
                    name='stockBarang'
                    placeholder='STOCK BARANG'
                    value={formik.values.stockBarang}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={isLoadingProduk}
                />}
                {formik.touched.stockBarang && formik.errors.stockBarang ? <div className={styles.error}>{formik.errors.stockBarang}</div> : null}

                {false &&
                    <div className={styles.radioGroup}>
                        <input
                            type="radio"
                            id="langsung"
                            name="jenisBarang"
                            value="Langsung"
                            onClick={() => setShowIndent(!showIndent)}
                            checked={formik.values.jenisBarang === "Langsung"}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="langsung">Langsung</label>
                        <input
                            type="radio"
                            id="indent"
                            name="jenisBarang"
                            value="Indent"
                            onClick={() => setShowIndent(!showIndent)}
                            checked={formik.values.jenisBarang === "Indent"}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="indent">Indent</label>

                    </div>}

                {showIndent && <input
                    type='text'
                    name='catatanIndent'
                    placeholder='Catatan'
                    value={formik.values.catatanIndent}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={isLoadingProduk}
                />}

                {formik.touched.jenisBarang && formik.errors.jenisBarang ? <div className={styles.error}>{formik.errors.jenisBarang}</div> : null}

                <button type='submit' disabled={isLoadingProduk}>{!isLoadingProduk ? 'Submit' : 'Loading...'}</button>
                <div className={styles.close} onClick={() => setShowInputBarang()}>X</div>
            </form>
        </>
    );
}
