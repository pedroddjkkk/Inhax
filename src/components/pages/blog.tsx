"use client";
import { Prisma } from "@prisma/client";
import { useSession } from "next-auth/react";

export default function Blog({
  posts,
}: {
  posts: Prisma.postsGetPayload<{
    include: {
      author: true;
    };
  }>[];
}) {
  const session = useSession();
  
  return (
    <div>
      <div className="mx-auto w-[80%] bg-slate-50 flex flex-col justify-center items-center shadow-sm mt-8 p-8">
        <h1 className="text-4xl font-semibold">Blog</h1>
        <span className="text-lg mt-1">
          Aqui está as ultimas atualizações de viagens espaciais!
        </span>
      </div>
    </div>
  );
}
