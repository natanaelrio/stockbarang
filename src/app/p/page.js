import ListProduct from '@/components/listProduct'
import { GetPendingProduct } from '@/service/data'

export default async function Page() {
    const data = await GetPendingProduct()
    return (
        <>
            <ListProduct data={data.data} />
        </>
    )
}
