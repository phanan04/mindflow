import ArticleCard from "@/Components/ArticleCard";
import { LayoutContainer } from "@/Components/LayoutContainer";
import { getPosts } from "../lib/getPosts";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <h1 className="text-black text-center text-3xl py-4">Feature game</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <ArticleCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
