import { GetNotifikasiSales, GetPendingProduct } from '@/service/data'
import { authOptions } from '@/controllers/auth';
import { getServerSession } from "next-auth";
import Login from '@/components/login'
import Header from '@/components/header';
import NotifikasiSales from '@/components/notifkasiSales';

export default async function Page() {
    const session = await getServerSession(authOptions)
    const roles = session?.role || [];

    const data = await GetNotifikasiSales(session?.username)

    return (
        <>
            {roles.includes('sales') ?
                <>
                    <Header session={session} Ksearch={false} />
                    <NotifikasiSales data={data?.data} session={session} />
                </>
                : <Login />}

        </>
    )
}