// import type { NextAuthOptions } from "next-auth"
import { GetDataUser } from "@/service/data";
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null

                const datauser = await GetDataUser(credentials?.email)

                const user = datauser.email === credentials.email && datauser.password === credentials.password

                if (!user) {
                    return null; // Jika tidak ditemukan, kembalikan null
                }

                // Jika ditemukan, kembalikan data pengguna
                return {
                    id: datauser.id,
                    email: datauser.email,
                    username: datauser.username,
                    namaUser: datauser.namaUser,
                    role: datauser.role,
                    gudang: datauser.gudang
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    username: user.username,
                    namaUser: user.namaUser,
                    role: user.role,
                    gudang: user.gudang,
                };
            }
            return token;
        },
        async session({ session, token }) {
            const datauser = await GetDataUser(token.email)
            return {
                ...session,
                id: datauser.id,
                email: datauser.email,
                username: datauser.username,
                namaUser: datauser.namaUser,
                role: datauser.role,
                gudang: datauser.gudang
            };
        }
    },
    pages: {
        signIn: "/"
    }
};
