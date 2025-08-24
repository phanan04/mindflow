import ArticleCard from "@/Components/card/ArticleCard";
import CategoryArticleCard from "@/Components/card/CategoryArticleCard";
import { getPosts } from "@/lib/getPosts";
import { Section } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "GameFLow - Tin Tức & Đánh Giá Game",
  description: "Điểm đến tuyệt vời cho tin tức game mới nhất, đánh giá và cập nhật",
};

export const revalidate = 7200; 

export default async function HomePage() {
  const posts = await getPosts();
  const featuredPosts = posts.slice(0, 3);  
  const latestPosts = posts.slice(3, 7); 

  return (
    <>
      <section className="bg-white dark:bg-black dark:border-zinc-700 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Welcome to GameFlow
          </h1>
          <p className="text-lg md:text-xl mb-8 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Khám phá tin tức game mới nhất, đánh giá chi tiết và nội dung độc
            quyền từ thế giới game
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/categories/all-posts"
              className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Khám Phá Game
            </Link>

            <Link
              href="/"
              className="px-6 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg font-medium transition-colors"
            >
              Đánh giá mới nhất
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent"></div>
      </div>

      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Game Nổi Bật
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Đừng bỏ lỡ những game thịnh hành và đánh giá hot nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-zinc-100 dark:border-zinc-700"
              >
                <CategoryArticleCard
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  coverImage={post.coverImage}
                  author={{
                    ...post.author,
                    name: post.author.name ?? "Unknown Author",
                  }}
                  date={post.date}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent"></div>
      </div>

      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                Tin Tức Game Mới Nhất
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                Cập nhật những tin tức game hot nhất
              </p>
            </div>
            <Link
              href="/categories/all-posts"
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-lg font-medium transition-colors mt-4 md:mt-0 shadow-lg hover:shadow-xl"
            >
              Xem tất cả bài viết
              <FaArrowRight className="w-4 h-4"></FaArrowRight>
            </Link>
          </div>

          <div className="space-y-6">
            {latestPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                {/* Mobile Layout */}
                <div className="block md:hidden">
                  <CategoryArticleCard
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    coverImage={post.coverImage}
                    author={post.author}
                    date={post.date}
                  />
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <ArticleCard
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    coverImage={post.coverImage}
                    author={post.author}
                    date={post.date}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
