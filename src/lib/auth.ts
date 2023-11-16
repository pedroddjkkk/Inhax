import NextAuth from "next-auth";
import GitHub from "next-auth/providers/GitHub";
import credentials from "next-auth/providers/credentials";
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(user) {
        if (user.username == "admin" && user.password == "admin") {
          return { username: "admin", email: "admin@gmail.com", id: "1" };
        } else {
          return null;
        }
      },
    }),
  ],
});
