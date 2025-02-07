// import type { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "Email",
                    type: "Email",
                    placeholder: "example"
                },
                password: {
                    label: "password",
                    type: "password",
                }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null

                const users = [
                    {
                        id: "1",
                        email: "rio@pelangiteknik.com",
                        password: "developer",
                        namaUser: "Rio ( Developer )",
                        username: 'riodev',
                        role: ['tambahindent', 'pending', 'verminplus', 'log']
                    },
                    {
                        id: "2",
                        email:
                            "purchfitri@pelangiteknik.com",
                        password: "purshfitri1x23",
                        namaUser: "Fitri ( Purchasing )",
                        username: 'fitripurcha',
                        role: ['tambahindent', 'verplus']
                    },
                    {
                        id: "3",
                        email: "adminsin@pelangiteknik.com",
                        password: "adminsin12e3",
                        namaUser: "Sin ( Admin )",
                        username: 'adminsin',
                        role: ['pending', 'nopending']
                    },
                    {
                        id: "4",
                        email: "spvirfan@pelangiteknik.com",
                        password: "spvirfan12k3",
                        namaUser: "Irfan (SPV)",
                        username: 'irfanspv',
                        role: ['vermin']
                    },
                    {
                        id: "5",
                        email: "selesdhita@pelangiteknik.com",
                        password: "selesdhitav123",
                        namaUser: "Dhita (Sales)",
                        username: 'dhitasales',
                        role: ['sales']
                    },
                    {
                        id: "6",
                        email: "dwispert@pelangiteknik.com",
                        password: "dwispertsv123",
                        namaUser: "Dwi (Sparepart)",
                        username: 'sparepartdwi',
                        role: ['sales', 'pending', 'nopending']
                    },
                ];

                // Cari pengguna berdasarkan email dan password
                const user = users.find(
                    (u) => u.email === credentials.email && u.password === credentials.password
                );


                if (!user) {
                    return null; // Jika tidak ditemukan, kembalikan null
                }

                // Jika ditemukan, kembalikan data pengguna
                return {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    namaUser: user.namaUser,
                    role: user.role
                };
            }
        }
        )
    ], callbacks: {
        jwt({ token, user }) {
            if (!user) return token
            return {
                ...token,
                id: user.id,
                username: user.username,
                namaUser: user.namaUser,
                role: user.role
            }
        },
        session({ session, token }) {
            return {
                ...session,
                id: token.id,
                email: token.email,
                username: token.username,
                namaUser: token.namaUser,
                role: token.role,
            }
        }
    },
    pages: {
        signIn: "/"
    }

}