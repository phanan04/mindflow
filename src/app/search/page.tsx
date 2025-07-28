import ArticleCard from "@/Components/ArticleCard";
import CategoryArticleCard from "@/Components/CategoryArticleCard";
import { getPostByKeyword } from "@/lib/getPostByKeyword";
import { asText } from "@prismicio/helpers";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const params = await searchParams;
  const query = params.query;
  const posts = await getPostByKeyword(query);

  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 py-8">
      <h1 className="text-center my-2 font-bold text-xl">Kết quả tìm kiếm: </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.length === 0 ? (
          <p>No results found for &quot;{query}&quot;</p>
        ) : (
          posts.map((post) => (
            <CategoryArticleCard
              key={post.id}
              slug={post.uid}
              title={asText(post.data.title) || ""}
              excerpt={asText(post.data.excerpt) || ""} 
              coverImage={post.data.coverImage.url}
              author={{
                name: post.data.author.data.name,
                avatar: post.data.author.data.avatar?.url,
              }}
              date={post.data.date}
            />
          ))
        )}
      </div>
    </div>
  );
}
