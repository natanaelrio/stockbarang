import { prisma } from "@/controllers/prisma"
import { ResponseData } from "@/controllers/ResponseData";

export async function GET(req) {
    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const data = await prisma.product.findMany({
            take: 17,
            orderBy: {
                start: 'desc'
            },
            include: {
                pendingProduct: {
                    where: {
                        jenisBarang: {
                            contains: 'Indent',
                            mode: 'insensitive'
                        }
                    }
                }
            }
        });
        const authorization = req.headers.get('authorization')
        const res = await ResponseData(data, authorization)
        return res
    } else {
        return new Response(JSON.stringify({ isCreated: false }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        })
    }
}