'use client'
import styles from '@/components/footer.module.css';
import { useBearStore } from '@/zustand/data';
import InputBarang from '@/components/inputBarang';
import SelectProduct from '@/components/selectProduct';
import ScanCameraBarcode from '@/components/scanCameraBarcode';
import { FaSquarePen } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";
import { LuScanSearch } from "react-icons/lu";
import { FaBell } from "react-icons/fa";

import Link from 'next/link';

export default function Footer({ session }) {
    const roles = session?.role || [];
    const KondisiSessionTambahIndent = roles.includes('tambahlangsung')
    const KondisiSessionTambahLangsung = roles.includes('tambahindent')
    const KondisiSessionVermin = roles.includes('vermin')
    const KondisiSessionVerPlus = roles.includes('verplus')
    const KondisiSessionVerMinPlus = roles.includes('verminplus')
    const KondisiSessionSales = roles.includes('sales')
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
                    {KondisiSessionTambahIndent || KondisiSessionTambahLangsung && <button className={styles.tambahproduct} onClick={TombolTambahkan}>
                        <div>
                            <FaPlusSquare size={39} />
                        </div>
                        <span>New Product</span>
                    </button>}
                    {KondisiSessionSales && <button className={styles.tambahproduct} onClick={TombolTambahkan}>
                        <div>
                            <FaPlusSquare size={39} />
                        </div>
                        <span>Req Product</span>
                    </button>}
                    <div className={styles.transparan}></div>
                    <button className={styles.tombolscan} onClick={TombolScan}>
                        <div><LuScanSearch size={39} /></div>
                        <span>Scan</span>
                    </button>
                    {KondisiSessionVermin && <Link href={'/ver'} className={styles.tombolver}>
                        <div>
                            <FaSquarePen size={39} />
                        </div>
                        <span>Verivikasi</span>
                    </Link>
                    }
                    {KondisiSessionVerPlus && <Link href={'/ver'} className={styles.tombolver}>
                        <div>
                            <FaSquarePen size={39} />
                        </div>
                        <span>Verivikasi</span>
                    </Link>
                    }
                    {KondisiSessionSales && <Link href={'/notif'} className={styles.tombolver}>
                        <div>
                            <FaBell size={39} />
                        </div>
                        <span>Notif</span>
                    </Link>
                    }
                </div>
            </div >
            {showInputBarang && <InputBarang session={session} />}
            {showSelectedProduct && <SelectProduct />}
            {showScanCameraBarcode && <ScanCameraBarcode session={session} />}
        </>

    )
}
