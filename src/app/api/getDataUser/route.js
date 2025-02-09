import { ResponseData } from "@/controllers/ResponseData";

export async function GET(req) {
    const authorization = req.headers.get('authorization')
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('query')

    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const dataUsers = [
            {
                id: "1",
                email: "rio@pelangiteknik.com",
                password: "developer",
                namaUser: "Rio ( Developer)",
                username: 'riodev',
                gudang: 0,
                role: ['tambahindent', 'pending', 'verminplus', 'log']
            },
            {
                id: "2",
                email:
                    "purchfitri@pelangiteknik.com",
                password: "purshfitri1x23",
                namaUser: "Fitri ( Purchasing94 )",
                username: 'fitripurcha',
                gudang: 0,
                role: ['tambahindent', 'verplus', 'nopending']
            },
            {
                id: "3",
                email: "adminsin@pelangiteknik.com",
                password: "adminsin12e3",
                namaUser: "Sin ( Admin94 )",
                username: 'adminsin',
                gudang: 11111,
                role: ['pending', 'nopending']
            },
            {
                id: "4",
                email: "spvirfan@pelangiteknik.com",
                password: "spvirfan12k3",
                namaUser: "Irfan (SPV94)",
                username: 'irfanspv',
                gudang: 11111,
                role: ['vermin']
            },
            {
                id: "5",
                email: "selesdhita@pelangiteknik.com",
                password: "selesdhitav123",
                namaUser: "Dhita (Sales94)",
                username: 'dhitasales',
                gudang: 11111,
                role: ['sales']
            },
            {
                id: "6",
                email: "dwispert@pelangiteknik.com",
                password: "dwispertsv123",
                namaUser: "Dwi (Sparepart94)",
                username: 'sparepartdwi',
                gudang: 11111,
                role: ['pending', 'nopending']
            },
        ];

        const data = dataUsers.find((u) => u.email == query);
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