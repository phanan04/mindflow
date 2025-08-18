import ArticleCard from "@/Components/card/ArticleCard";
import CategoryArticleCard from "@/Components/card/CategoryArticleCard";
import { getPosts } from "@/lib/getPosts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NextGame - Gaming News & Reviews",
  description: "Your ultimate destination for latest gaming news, reviews, and updates",
};

export const revalidate = 30;

export default async function HomePage() {
  const posts = await getPosts();
  const featuredPosts = posts.slice(0, 3);
  const latestPosts = posts.slice(3);

  return (
    <>
      {/* Hero Section */}
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

      {/* Featured Games Section */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🎮 Featured Games
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Don't miss these trending games and reviews
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={post.id} className="group relative overflow-hidden rounded-xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                    Read More →
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

      {/* Game Categories */}
      <section className="py-16 bg-gray-50 dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 Game Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore games by your favorite genres
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Action", emoji: "⚔️", color: "from-red-500 to-orange-500" },
              { name: "RPG", emoji: "🧙", color: "from-purple-500 to-indigo-500" },
              { name: "Strategy", emoji: "🎯", color: "from-blue-500 to-cyan-500" },
              { name: "Adventure", emoji: "🗺️", color: "from-green-500 to-emerald-500" },
              { name: "Sports", emoji: "⚽", color: "from-yellow-500 to-amber-500" },
              { name: "Racing", emoji: "🏎️", color: "from-pink-500 to-rose-500" },
              { name: "Puzzle", emoji: "🧩", color: "from-teal-500 to-cyan-500" },
              { name: "Horror", emoji: "👻", color: "from-gray-700 to-gray-900" }
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

      {/* Latest Game News */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                📰 Latest Game News
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Stay updated with the hottest gaming news
              </p>
            </div>
            <Link
              href="/categories/all-posts"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-300 mt-4 md:mt-0"
            >
              View All Posts
            </Link>
          </div>

          <div className="space-y-8">
            {latestPosts.slice(0, 6).map((post) => (
              <div key={post.id} className="bg-white dark:bg-zinc-800 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Mobile Layout */}
                <div className="block md:hidden">
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

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <ArticleCard
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
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/categories/all-posts"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-lg font-semibold text-lg hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-100 dark:hover:to-gray-300 transition-all duration-300 transform hover:scale-105"
            >
              Load More Articles
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gaming Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎮 Gaming Community Stats
            </h2>
            <p className="text-lg text-gray-200">
              Join our growing community of gamers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-300">Active Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1.2K+</div>
              <div className="text-gray-300">Game Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Gaming Guides</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Fresh Content</div>
            </div>
          </div>
        </div>
      </section>
    </> 
  );
}
