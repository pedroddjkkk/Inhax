import NextAuth from "next-auth";
import GitHub from "next-auth/providers/GitHub";
import credentials from "next-auth/providers/credentials";
import prisma from "./db";
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    credentials({
      name: "Registre-se",
      id: "credentials",
      credentials: {
        name: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(user) {
        const findUser = await prisma.user.findFirst({
          where: {
            name: user.name as string,
            password: user.password as string,
          },
        });

        if (findUser) {
          const { password, ...userWithouPass } = findUser;
          userWithouPass;

          return {
            ...userWithouPass,
            id: userWithouPass.id.toString(),
          };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/registrar",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.admin = token.admin as boolean;
      session.user.id = token.id as string;

      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (!trigger) return token;
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
  },
  jwt: {
    maxAge: 60 * 60, // 1 hour
  },
});
