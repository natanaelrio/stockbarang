
import { prisma } from "@/controllers/prisma"
import { ResponseData } from "@/controllers/ResponseData";

export async function GET(req) {
    const authorization = req.headers.get('authorization')
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('role')
    const jenisBarang = searchParams.get('jenisBarang')

    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const data = await prisma.pendingProduct.findMany({
            where: query != 'null' ? {
                role: {
                    contains: query
                },
                jenisBarangId: jenisBarang == 'undefined' ? {} : Number(jenisBarang)
            } : {},
            orderBy: {
                start: 'desc'
            },
            include: {
                products: true
            }
        });
        const res = await ResponseData(data, authorization)
        return res
    } else {
        return new Response(JSON.stringify({ isCreated: false }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        })
    }

}