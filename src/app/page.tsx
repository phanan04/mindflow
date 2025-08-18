import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "NextGame - Gaming News & Reviews",
  description: "Your ultimate destination for latest gaming news, reviews, and updates",
};

export const revalidate = 7200; // Cache 2 giờ

// Simple loading component
const PostsLoading = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-64"></div>
      ))}
    </div>
  </div>
);

// Placeholder for posts section
const PostsSection = () => (
  <section className="py-16 bg-white dark:bg-zinc-900">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        🎮 Featured Games
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Gaming content will be loaded here
      </p>
    </div>
  </section>
);

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
              Discover the latest gaming news, in-depth reviews, and exclusive content from the world of gaming
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/categories/all-posts"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Games
              </Link>
              <Link
                href="/categories/reviews"
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Latest Reviews
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
              🎯 Game Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Action", emoji: "⚔️", color: "from-red-500 to-orange-500" },
              { name: "RPG", emoji: "🧙", color: "from-purple-500 to-indigo-500" },
              { name: "Strategy", emoji: "🎯", color: "from-blue-500 to-cyan-500" },
              { name: "Adventure", emoji: "🗺️", color: "from-green-500 to-emerald-500" }
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
