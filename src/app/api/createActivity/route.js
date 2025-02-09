import { prisma } from "@/controllers/prisma"
import { ResponseData } from "@/controllers/ResponseData";

export async function POST(req) {
    const { userActivity, activity, username } = await req.json()

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        try {
            const data = await prisma.logUser.create({
                data: {
                    userActivity, activity, username
                }
            })
            const res = await ResponseData(data, authorization)
            return res
        } catch (error) {
            res.status(500).json({ message: "Terjadi kesalahan pada server" });
        }
    }
    return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}