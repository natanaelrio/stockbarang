
import { prisma } from "@/controllers/prisma"
import { ResponseData } from "@/controllers/ResponseData";

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('query')

    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const data = await prisma.product.findMany({
            where: {
                name_barang: {
                    contains: query,
                    mode: 'insensitive'
                }
            },
            include: {
                produkGedung: true,
            }
        });

        const dataLength = data.length

        const authorization = req.headers.get('authorization')
        const res = await ResponseData(data, authorization, { dataLength: dataLength == 0 ? 'Tidak ada Produk' : dataLength + ' Produk, ditemukan!!' })
        return res

    } else {
        return new Response(JSON.stringify({ isCreated: false }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        })
    }
}