import Blog from "@/components/pages/blog";
import prisma from "@/lib/db";

export default async function BlogWrapper() {
  const posts = await prisma.posts.findMany({
    include: {
      author: true,
    },
  });

  return <Blog posts={posts} />;
}
