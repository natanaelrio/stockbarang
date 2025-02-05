import ListProduct from '@/components/listProduct'
import Login from '@/components/login'
import { authOptions } from '@/controllers/auth';
import { getServerSession } from "next-auth";
import Header from '@/components/header';
import Footer from '@/components/footer';

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
      {session ?
        <>
          <Header session={session} />
          <ListProduct />
          <Footer session={session} />
        </>
        : <Login />}
    </>
  )
}