import ArticleCard from "@/Components/ArticleCard";
import { getPosts } from "@/lib/getPosts";
import Link from "next/link";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="w-full max-w-[auto] mx-auto">
      <h1 className="text-black text-center text-3xl py-4">Feature game</h1>
      <div className="space-y-6 pb-4">
        {posts.map((post) => (
          <ArticleCard key={post.id} {...post} />
        ))}
      </div>
      <Link href="/categories/allposts" className="px-4 py-2 bg-black w-fit text-white mx-auto flex justify-center">
        ALL POSTS
      </Link>
    </div>
  );
}
