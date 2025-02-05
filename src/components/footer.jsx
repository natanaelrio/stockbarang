'use client'
import styles from '@/components/footer.module.css';
import { useSession } from "next-auth/react";
import { useBearStore } from '@/zustand/data';
// import { useRouter } from 'nextjs-toploader/app';
import InputBarang from '@/components/inputBarang';
import SelectProduct from '@/components/selectProduct';
import ScanCameraBarcode from '@/components/scanCameraBarcode';
import { FaSquarePen } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { LuScanSearch } from "react-icons/lu";
import { useRouter } from 'next/navigation';

export default function Footer() {
    const router = useRouter()
    const { data: session } = useSession();
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
                    <button className={styles.tombolver} onClick={() => router.push('/ver')}>
                        <div>
                            <FaSquarePen size={39} />
                        </div>
                        <span>Verivikasi</span>
                    </button>
                    <div className={styles.transparan}></div>
                    <button className={styles.tombolscan} onClick={TombolScan}>
                        <div><LuScanSearch size={39} /></div>
                        <span>Scan</span>
                    </button>
                    {KondisiSessionTambah && <button className={styles.tambahproduct} onClick={TombolTambahkan}>
                        <div>
                            <IoMdAdd size={39} />
                        </div>
                        <span>Product</span>
                    </button>}
                </div>
            </div>
            {showInputBarang && <InputBarang />}

            {showSelectedProduct && <SelectProduct />}

            {showScanCameraBarcode && <ScanCameraBarcode />
            }
        </>

    )
}
