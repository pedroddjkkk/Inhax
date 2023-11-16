"use client";
import { Prisma } from "@prisma/client";
import { useSession } from "next-auth/react";
import { GoPlus } from "react-icons/go";

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
        <h1 className="text-4xl font-semibold">
          Blog{" "}
          {session.data?.user.admin ? (
            <GoPlus size={24} className="text-red-500 ml-2" />
          ) : null}
        </h1>
        <span className="text-lg mt-1">
          Aqui está as ultimas atualizações de viagens espaciais!
        </span>
      </div>
    </div>
  );
}
