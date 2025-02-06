import { prisma } from "@/controllers/prisma"
import { ResponseData } from "@/controllers/ResponseData";

export async function POST(req) {
    const { username, namaBarang, jumlahBarang, note } = await req.json()
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        try {
            const data = await prisma.notifUser.create({
                data: {
                    username,
                    namaBarang,
                    jumlahBarang: Number(jumlahBarang),
                    note
                }
            })

            console.log('owkdkodwwkod', data);

            const res = await ResponseData(data, authorization)
            return res
        } catch (error) {
            Response.json({ status: 500, isCreated: false, contact: 'kesalahan server' })
        }
    } else {
        return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
    }
}