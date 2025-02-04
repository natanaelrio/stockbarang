import Pending from '@/components/pending'
import { GetPendingProduct } from '@/service/data'

export default async function Page() {
    const data = await GetPendingProduct()
    return (
        <>
            <Pending data={data.data} />
        </>
    )
}
