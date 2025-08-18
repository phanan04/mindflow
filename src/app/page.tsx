import ArticleCard from "@/Components/card/ArticleCard";
import CategoryArticleCard from "@/Components/card/CategoryArticleCard";
import { getPosts } from "@/lib/getPosts";
import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GameFLow - Tin Tức & Đánh Giá Game",
  description: "Điểm đến tuyệt vời cho tin tức game mới nhất, đánh giá và cập nhật",
};

export const revalidate = 7200; // Cache 2 giờ

// Loading component
const PostsLoading = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-64"></div>
      ))}
    </div>
  </div>
);

async function PostsSection() {
  const posts = await getPosts();
  const featuredPosts = posts.slice(0, 3);  
  const latestPosts = posts.slice(3, 7);   
  return (
    <>
      {/* Featured Games Section */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🎮 Game Nổi Bật
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Đừng bỏ lỡ những game thịnh hành và đánh giá hot nhất
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={post.id} className="group relative overflow-hidden rounded-xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-gray-200 mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Xem Thêm →
                  </Link>
                </div>
                {index === 0 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    🔥 HOT
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Game News */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                📰 Tin Tức Game Mới Nhất
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Cập nhật những tin tức game hot nhất
              </p>
            </div>
            <Link
              href="/categories/all-posts"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-300 mt-4 md:mt-0"
            >
              Xem Tất Cả Bài Viết
            </Link>
          </div>

          <div className="space-y-8">
            {latestPosts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
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

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Critical for LCP */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Welcome to GameFlow
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Khám phá tin tức game mới nhất, đánh giá chi tiết và nội dung độc quyền từ thế giới game
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/categories/all-posts"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Khám Phá Game
              </Link>
              <Link
                href="/categories/reviews"
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Đánh Giá Mới Nhất
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lazy load posts section */}
      <Suspense fallback={<PostsLoading />}>
        <PostsSection />
      </Suspense>

      {/* Static Game Categories */}
      <section className="py-16 bg-gray-50 dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 Thể Loại Game
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Hành Động", emoji: "⚔️", color: "from-red-500 to-orange-500" },
              { name: "RPG", emoji: "🧙", color: "from-purple-500 to-indigo-500" },
              { name: "Chiến Thuật", emoji: "🎯", color: "from-blue-500 to-cyan-500" },
              { name: "Phiêu Lưu", emoji: "🗺️", color: "from-green-500 to-emerald-500" }
            ].map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase()}`}
                className={`group p-6 rounded-xl bg-gradient-to-br ${category.color} text-white hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </div>
                <h3 className="font-bold text-lg">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
