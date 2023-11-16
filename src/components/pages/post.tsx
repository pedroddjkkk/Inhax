"use client";
import { Prisma } from "@prisma/client";
import { RenderPure } from "../shared/render-pure";
import { useSession } from "next-auth/react";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";

export default function Post({
  post,
}: {
  post: Prisma.postsGetPayload<{
    include: {
      author: true;
    };
  }>;
}) {
  const session = useSession();

  return (
    <div className="mx-auto w-[80%]">
      <div className="w-full mb-16 mt-6 flex justify-center items-center flex-col">
        <h1 className="text-4xl fontbold flex">
          {post.title}{" "}
          {session.data?.user?.id == post.author.id.toString() ? (
            <FaRegTrashAlt className="ml-4 hover:cursor-pointer text-red-500" onClick={async () => {
              const res = await axios.delete("/api/post/" + post.id);
            }}/>
          ) : null}
        </h1>
        <span className="text-xl mt-4">{post.description}</span>
      </div>
      <span>
        Autor: {post.author.name}, {post.author.email}
      </span>
      <RenderPure __html={post.content} className="mt-8 mb-16" />
    </div>
  );
}
