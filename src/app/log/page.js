import Activity from '@/components/activity'
import { GetLogActivity } from '@/service/data'
import { authOptions } from '@/controllers/auth';
import { getServerSession } from "next-auth";
import Login from '@/components/login'
import Header from '@/components/header';

export default async function Page() {
    const data = await GetLogActivity()
    const session = await getServerSession(authOptions)
    const roles = session?.role || [];

    return (
        <>
            {roles.includes('log') ?
                <>
                    <Header session={session} />
                    <Activity data={data.data} />
                </>
                : <Login />}
        </>
    )
}