import ListProduct from '@/components/listProduct'
import Login from '@/components/login'
import { GetProduct } from '@/service/data'
import { authOptions } from '@/controllers/auth';
import { getServerSession } from "next-auth";

export default async function Home() {
  const data = await GetProduct()
  const session = await getServerSession(authOptions)

  console.log(session);

  return (
    <>
      {session ? <ListProduct data={data.data} /> : <Login />}
    </>
  )
}