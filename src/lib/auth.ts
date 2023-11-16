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
});
