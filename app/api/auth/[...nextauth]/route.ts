import prisma from "@/prisma";
import { connectDB } from "@/utils/connectDB";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

type CredentialsType = {
  email: string;
  password: string;
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      //@ts-ignore
      async authorize(credentials: CredentialsType) {
        const { email, password } = credentials;

        console.log(email, password)

        try {
          await connectDB();

          const user = await prisma.user.findUnique({ where: { email } });
          if (!user) {
            return null;
          }

          if (password !== user.password) {
            return null;
          }

          return user;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
