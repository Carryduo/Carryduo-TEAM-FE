import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { NextApiRequest, NextApiResponse } from "next";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    secret: process.env.SECRET,
    providers: [
      KakaoProvider({
        name: "kakao",
        clientId: process.env.KAKAO_CLIENT_ID || "",
        clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
      }),
    ],
    pages: {
      signIn: "/",
      signOut: "/",
    },
  });
}
