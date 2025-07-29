import ArticleCard from "@/Components/card/ArticleCard";
import CategoryArticleCard from "@/Components/card/CategoryArticleCard";
import { getPosts } from "@/lib/getPosts";
import Link from "next/link";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 dark:bg-zinc-900 dark:text-white">
      <h1 className="text-black text-center text-3xl py-4 dark:bg-zinc-900 dark:text-white">
        Feature game
      </h1>
      <div className="lg:grid-cols-1 pb-6 space-y-6 dark:bg-zinc-900 dark:text-white">
        {posts.map((post) => (
          <div key={post.id}>
            {/* Mobile  */}
            <div className="block md:hidden">
              <CategoryArticleCard
                {...post}
                author={{
                  ...post.author,
                  name: post.author.name ?? "Unknown Author",
                }}
              />
            </div>

            {/* Desktop  */}
            <div className="hidden md:block">
              <ArticleCard
                {...post}
                author={{
                  ...post.author,
                  name: post.author.name ?? "Unknown Author",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/categories/allposts"
        className="px-4 py-2 bg-black w-fit text-white mx-auto flex justify-center dark:bg-white dark:text-black"
      >
        ALL POSTS
      </Link>
    </div>
  );
}
