import ArticleCard from "@/Components/ArticleCard";
import { LayoutContainer } from "@/Components/LayoutContainer";
import { getPosts } from "../lib/getPosts";

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
      <button className="px-4 py-2 bg-black text-white mx-auto flex justify-center">
        <a href="/categories/allposts">ALL POSTS</a>
      </button>
    </div>
  );
}
