
import { prisma } from "@/controllers/prisma"
import { ResponseData } from "@/controllers/ResponseData";

export async function DELETE(req) {
    const authorization = req.headers.get('authorization')
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('id')

    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const data = await prisma.pendingProduct.delete({
            where: {
                id: query
            }
        })
        const res = await ResponseData(data, authorization)
        return res
    } else {
        return new Response(JSON.stringify({ isCreated: false }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        })
    }

}