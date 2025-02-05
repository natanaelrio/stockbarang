'use client'
import styles from '@/components/footer.module.css';
import { useBearStore } from '@/zustand/data';
import InputBarang from '@/components/inputBarang';
import SelectProduct from '@/components/selectProduct';
import ScanCameraBarcode from '@/components/scanCameraBarcode';
import { FaSquarePen } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";
import { LuScanSearch } from "react-icons/lu";
import Link from 'next/link';

export default function Footer({ session }) {
    const roles = session?.role || [];
    const KondisiSessionTambah = roles.includes('tambah')
    const setScannedData = useBearStore((state) => state.setScannedData)
    const setShowInputBarang = useBearStore((state) => state.setShowInputBarang)
    const setScanShowCameraBarcode = useBearStore((state) => state.setScanShowCameraBarcode);
    const showInputBarang = useBearStore((state) => state.showInputBarang)
    const showSelectedProduct = useBearStore((state) => state.showSelectedProduct);
    const showScanCameraBarcode = useBearStore((state) => state.showScanCameraBarcode);

    const TombolScan = () => {
        setScanShowCameraBarcode()
    }

    const TombolTambahkan = () => {
        setShowInputBarang()
        setScannedData(null)
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.dalamcontainer}>
                    {KondisiSessionTambah && <button className={styles.tambahproduct} onClick={TombolTambahkan}>
                        <div>
                            <FaPlusSquare size={39} />
                        </div>
                        <span>Product</span>
                    </button>}
                    <div className={styles.transparan}></div>
                    <button className={styles.tombolscan} onClick={TombolScan}>
                        <div><LuScanSearch size={39} /></div>
                        <span>Scan</span>
                    </button>
                    <Link href={'/ver'} className={styles.tombolver}>
                        <div>
                            <FaSquarePen size={39} />
                        </div>
                        <span>Verivikasi</span>
                    </Link>

                </div>
            </div>
            {showInputBarang && <InputBarang session={session} />}

            {showSelectedProduct && <SelectProduct />}

            {showScanCameraBarcode && <ScanCameraBarcode session={session} />
            }
        </>

    )
}
