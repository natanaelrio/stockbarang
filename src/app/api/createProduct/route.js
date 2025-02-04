import { prisma } from "@/controllers/prisma"
import { ResponseData } from "@/controllers/ResponseData";

export async function POST(req) {
    const { id, name_barang, stock_barang, userActivity, activity } = await req.json()

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        try {
            const dataUtama = await prisma.product.create({
                data: {
                    id: id,
                    name_barang,
                    stock_barang,
                }
            })

            const logUser = await prisma.logUser.create({
                data: {
                    userActivity,
                    activity
                }
            })

            const data = await prisma.$transaction([dataUtama, logUser])

            const res = await ResponseData(data, authorization)
            return res
        } catch (error) {
            if (error.code === "P2002") {
                return new Response(JSON.stringify({ status: 500 }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                })
            } else {
                res.status(500).json({ message: "Terjadi kesalahan pada server" });
            }
        }
    }
    return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}