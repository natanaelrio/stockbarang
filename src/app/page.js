import ListProduct from '@/components/listProduct'
import HandleGetProduct from '@/service/handleGetProduct'

export default async function Home() {
  const data = await HandleGetProduct()
  return (
    <>
      <ListProduct data={data.data} />
    </>
  )
}
