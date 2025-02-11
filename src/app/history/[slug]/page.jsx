import { authOptions } from '@/controllers/auth';
import { getServerSession } from "next-auth";
import Header from '@/components/header';
import Login from '@/components/login'
import { GetHistoryProduct } from '@/service/data';
import History from '@/components/history';

export default async function page({ params, searchParams }) {
    const session = await getServerSession(authOptions)
    const data = await GetHistoryProduct(params.slug, searchParams.jenisbarang)

    return (
        <>
            {session ?
                <>
                    <Header session={session} Ksearch={false} />
                    <History data={data?.data} param={searchParams.jenisbarang} session={session} />
                </>
                : <Login />}

        </>
    )
}
