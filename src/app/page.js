import ListProduct from '@/components/listProduct'
import { GetProduct } from '@/service/data'

export default async function Home() {
  const data = await GetProduct()
  return (
    <ListProduct data={data.data} />
  )
}
