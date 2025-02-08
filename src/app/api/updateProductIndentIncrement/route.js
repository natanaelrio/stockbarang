import { prisma } from "@/controllers/prisma"
import { ResponseData } from "@/controllers/ResponseData";

export async function PUT(req) {
    const { productId, stockBarang } = await req.json()
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        try {
            const data = await prisma.product.update({
                where: {
                    id: productId, // ID produk yang ingin diupdate
                },
                data: {
                    produkGedung: {
                        updateMany: {
                            where: {
                                produkId: productId,  // ID produk yang ingin dicari
                                gedungId: Number(10000)    // ID gedung yang ingin dicari
                            },
                            data: {
                                stockBarang: {
                                    increment: Number(stockBarang)  // Tambah stok barang
                                }
                            }
                        }
                    },
                }
            });


            const res = await ResponseData(data, authorization)
            return res
        } catch (error) {
            res.status(500).json({ message: "Terjadi kesalahan pada server" });
        }
    }
    return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}