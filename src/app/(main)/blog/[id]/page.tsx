import Post from "@/components/pages/post";
import prisma from "@/lib/db";
import "react-quill/dist/quill.snow.css";

export default async function Product({ params }: { params: { id: string } }) {
  const post = await prisma.posts.findUnique({
    include: {
      author: true,
    },
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) {
    return <h1>Post não encontrado!</h1>;
  } else {
    return <Post post={post} />;
  }
}
