import CategoryArticleCard from "@/Components/card/CategoryArticleCard";
import { getPostByKeyword } from "@/lib/getPostByKeyword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tìm Kiếm",
  description: "Tìm kiếm bài viết blog",
};

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
      <h1 className="text-center my-2 font-bold text-xl">Kết quả tìm kiếm: {query} </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.length === 0 ? (
          <p>Không tìm thấy kết quả cho &quot;{query}&quot;</p>
        ) : (
          posts.map((post) => (
            <CategoryArticleCard
              key={post.id}
              slug={post.uid}
              title={post.data.title || ''}
              excerpt={post.data.excerpt || ''} 
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
