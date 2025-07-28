import ArticleCard from "@/Components/ArticleCard";
import { getPosts } from "@/lib/getPosts";
import Link from "next/link";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="w-full max-w-[auto] mx-auto dark:bg-zinc-900 dark:text-white">
      <h1 className="text-black text-center text-3xl py-4 dark:bg-zinc-900 dark:text-white">Feature game</h1>
      <div className="space-y-6 pb-4 dark:bg-zinc-900 dark:text-white">
        {posts.map((post) => (
          <ArticleCard
            key={post.id}
            {...post}
            author={{
              ...post.author,
              name: post.author.name ?? "Unknown Author",
            }}
          />
        ))}
      </div>
      <Link href="/categories/allposts" className="px-4 py-2 bg-black w-fit text-white mx-auto flex justify-center dark:bg-white dark:text-black">
        ALL POSTS
      </Link>
    </div>
  );
}
