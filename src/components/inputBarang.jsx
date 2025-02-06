'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '@/components/listProduct.module.css';
import BarcodeScanner from '@/components/barcode';
import { useBearStore } from '@/zustand/data';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { CreateActivity, CreateProduct, CreateProductPendding } from '@/service/data';
import { useState } from 'react';
import { GetCurrentDateTimeGMT7 } from '@/utils/getCurrentDateTimeGMT7';

export default function InputBarang({ session }) {
    const router = useRouter();
    const roles = session?.role || [];
    const KondisiSessionTambahIndent = roles.includes('tambahindent')
    const KondisiSessionSales = roles.includes('sales')

    const id = GetCurrentDateTimeGMT7()

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
            stockBarang: '',
            jenisBarang: KondisiSessionSales ? 'Request' : 'Langsung',
            catatanIndent: '',
        },
        validationSchema: Yup.object({
            idBarang: Yup.string().required('ID Barang wajib diisi'),
            namaBarang: Yup.string().required('Nama Barang wajib diisi'),
            stockBarang: Yup.number().required('Stock Barang wajib diisi'),
            jenisBarang: Yup.string().oneOf(['Indent', 'Langsung', 'Request']).required('Jenis Barang wajib dipilih'),
        }),
        onSubmit: async (values, { setSubmitting }) => {

            try {
                const FetchDataNormal = async () => {
                    const dataProduct = await CreateProduct({
                        id: values.idBarang,
                        name_barang: values.namaBarang,
                        stock_barang: values.jenisBarang == 'Langsung' ? values.stockBarang : 0,
                    });

                    if (dataProduct.status == '500') {
                        throw new Error(`ID ${values.idBarang} sudah ada !!`);
                    }

                    values.jenisBarang == 'Indent' && await CreateProductPendding({
                        produkid: values.idBarang,
                        stock_barang: values.stockBarang,
                        note: values.catatanIndent,
                        jenisBarang: values.jenisBarang,
                        user: session?.namaUser,
                        username: session?.username,
                        role: 'verplus'
                    })
                    values.jenisBarang == 'Request' && await CreateProductPendding({
                        produkid: values.idBarang,
                        stock_barang: values.stockBarang,
                        note: values.catatanIndent,
                        jenisBarang: values.jenisBarang,
                        user: session?.namaUser,
                        username: session?.username,
                        role: 'verplus'
                    })
                    await CreateActivity({
                        userActivity: session.namaUser,
                        activity: `Penambahan Product ${values.namaBarang} ( ${values.idBarang} ) ${values.jenisBarang == 'Indent' && '( INDENT )'}`,
                    });
                };
                toast.promise(
                    FetchDataNormal(),
                    {
                        loading: 'Saving...',
                        success: <b>Berhasil {values.namaBarang} ditambahkan !</b>,
                        error: `ID ${values.idBarang} sudah ada !!`,
                    }
                );

                router.refresh();
                setShowInputBarang();
                setRefreshData()
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
                <button onClick={() => setShowScan(!showScan)}>{!showScan ? 'Input ID SCAN' : 'Tutup Input ID SCAN'}</button>
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

                <input
                    type='number'
                    name='stockBarang'
                    placeholder='STOCK BARANG'
                    value={formik.values.stockBarang}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting}
                />
                {formik.touched.stockBarang && formik.errors.stockBarang ? <div className={styles.error}>{formik.errors.stockBarang}</div> : null}

                {KondisiSessionTambahIndent &&
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
                    disabled={formik.isSubmitting}
                />}

                {KondisiSessionSales && <input
                    type='text'
                    name='catatanIndent'
                    placeholder='Catatan'
                    value={formik.values.catatanIndent}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting}
                />}

                {formik.touched.jenisBarang && formik.errors.jenisBarang ? <div className={styles.error}>{formik.errors.jenisBarang}</div> : null}

                <button type='submit' disabled={formik.isSubmitting}>Submit</button>
                <div className={styles.close} onClick={() => setShowInputBarang()}>X</div>
            </form>
        </>
    );
}
