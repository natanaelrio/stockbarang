import Pending from '@/components/pending'
import { GetPendingProduct } from '@/service/data'
import { authOptions } from '@/controllers/auth';
import { getServerSession } from "next-auth";
import Login from '@/components/login'
import Header from '@/components/header';

export default async function Page() {
    const session = await getServerSession(authOptions)
    const roles = session?.role || [];
    const verMin = roles.includes('vermin')
    const verPlus = roles.includes('verplus')
    const verMinPlus = roles.includes('verminplus')

    const data = await GetPendingProduct(verMin && 'vermin' || verPlus && 'verplus' || verMinPlus && null)

    return (
        <>
            {roles.includes('vermin') || roles.includes('verplus') || roles.includes('verminplus') ?
                <>
                    <Header session={session} />
                    <Pending data={data.data} session={session} />
                </>
                : <Login />}

        </>
    )
}