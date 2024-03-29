import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      admin: boolean;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    admin: boolean;
  }
}
