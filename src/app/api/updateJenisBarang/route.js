import { prisma } from "@/controllers/prisma"
import { ResponseData } from "@/controllers/ResponseData";

export async function PUT(req) {
    const { id, jenisBarang } = await req.json()

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        try {
            const data = await prisma.pendingProduct.update({
                where: {
                    id, // ID produk yang ingin diupdate
                },
                data: {
                    jenisBarang: jenisBarang
                },
            });

            const res = await ResponseData(data, authorization)
            return res
        } catch (error) {
            res.status(500).json({ message: "Terjadi kesalahan pada server" });
        }
    }
    return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}