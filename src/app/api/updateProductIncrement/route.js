import { prisma } from "@/controllers/prisma"
import { ResponseData } from "@/controllers/ResponseData";

export async function PUT(req) {
    const { id, stock, idPending, statusProduct, userActivity, activity } = await req.json()
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        try {
            const dataUtama = await prisma.product.update({
                where: {
                    id, // ID produk yang ingin diupdate
                },
                data: {
                    stock_barang: {
                        increment: Number(stock), // Mengurangi 5 dari stok produk
                    },
                    pendingProduct: {
                        update: {
                            where: {
                                id: idPending
                            }, data: {
                                statusProduct: Boolean(statusProduct)
                            }
                        }
                    }
                },
            });

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
            res.status(500).json({ message: "Terjadi kesalahan pada server" });
        }
    }
    return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}