import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/dist/client/components/headers";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.username,
      password: body.password,
    },
  });

  return NextResponse.json(user);
}
