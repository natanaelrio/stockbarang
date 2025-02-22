import { Inter } from 'next/font/google'
import './globals.css'
import Toasterrr from '@/components/Toaster'
import SessionProviderr from '@/controllers/SessionProviderr'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stock Barang',
  description: 'ok',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toasterrr />
      <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
      <body className={inter.className}>
        <SessionProviderr>
          {children}
        </SessionProviderr>
      </body>
    </html>
  )
}
