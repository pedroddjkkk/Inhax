import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const session = await auth();

  if (!session?.user.admin) {
    return NextResponse.json(
      { error: "Você não tem permissão para criar um post" },
      { status: 401 }
    );
  }

  const post = await prisma.posts.create({
    data: {
      content: body.content,
      title: body.title,
      author: {
        connect: {
          id: parseInt(session.user.id),
        },
      },
    },
  });

  revalidatePath("/blog");

  return NextResponse.json(post);
}
