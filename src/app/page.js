import ListProduct from '@/components/listProduct'
import Login from '@/components/login'
import { GetProduct } from '@/service/data'
import { authOptions } from '@/controllers/auth';
import { getServerSession } from "next-auth";
import Header from '@/components/header';
import Footer from '@/components/footer';

export default async function Home() {
  const data = await GetProduct()
  const session = await getServerSession(authOptions)

  return (
    <>
      {session ?
        <>
          <Header />
          <ListProduct data={data.data} />
          <Footer />
        </>
        : <Login />}
    </>
  )
}