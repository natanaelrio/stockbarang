import Pending from '@/components/pending'
import { authOptions } from '@/controllers/auth';
import { getServerSession } from "next-auth";
import Login from '@/components/login'
import Header from '@/components/header';

export default async function Page() {
    const session = await getServerSession(authOptions)
    const roles = session?.role || [];

    return (
        <>
            {roles.includes('vermin') || roles.includes('verplus') || roles.includes('verminplus') ?
                <>
                    <Header session={session} Ksearch={false} />
                    <Pending session={session} />
                </>
                : <Login />}

        </>
    )
}