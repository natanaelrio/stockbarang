import { prisma } from "@/controllers/prisma"
import { ResponseData } from "@/controllers/ResponseData";

export async function POST(req) {
    const { note, stock_barang, produkid, user, role, jenisBarang, username } = await req.json()
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    console.log(produkid);

    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        try {
            const data = await prisma.pendingProduct.create({
                data: {
                    note,
                    role,
                    jenisBarang,
                    stock_barang: Number(stock_barang),
                    user,
                    username,
                    products: {
                        connect: [
                            { id: produkid }, // Ganti dengan ID produk yang ada
                        ],
                    },
                }
            })
            const res = await ResponseData(data, authorization)
            return res
        } catch (error) {
            if (error.code === "P2002") {
                return new Response(JSON.stringify({ status: 500 }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                })
            } else {
                Response.json({ status: 500, isCreated: false, contact: 'kesalahan server' })
            }
        }
    }
    return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}