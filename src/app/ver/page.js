import Pending from '@/components/pending'
import { GetPendingProduct } from '@/service/data'
import { authOptions } from '@/controllers/auth';
import { getServerSession } from "next-auth";

export default async function Page() {
    const data = await GetPendingProduct()
    const session = await getServerSession(authOptions)
    const roles = session?.role || [];

    return (
        <>
            {roles.includes('ver') && <Pending data={data.data} />}
        </>
    )
}