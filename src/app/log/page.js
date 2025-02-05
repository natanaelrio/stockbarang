import Activity from '@/components/activity'
import { GetLogActivity } from '@/service/data'
import { authOptions } from '@/controllers/auth';
import { getServerSession } from "next-auth";

export default async function Page() {
    const data = await GetLogActivity()
    const session = await getServerSession(authOptions)
    const roles = session?.role || [];

    return (
        <>
            {roles.includes('log') && <Activity data={data.data} />}
        </>
    )
}