import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const post = await prisma.posts.findUnique({
    include: {
      author: true,
    },
    where: {
      id: parseInt(context.params.id),
    },
  });

  if (session.user.id !== post?.author.id.toString()) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const deletedPost = await prisma.posts.update({
    where: {
      id: parseInt(context.params.id),
    },
    data: {
      deletedAt: new Date(),
    },
  });

  revalidatePath("/blog");

  return NextResponse.json(deletedPost);
}
