import { createClient } from "../../../lib/prismicio";
import CategoryArticleCard from "../../../Components/card/CategoryArticleCard";
import Link from "next/link";
import { Metadata } from "next";
import { filter } from "@prismicio/client";

export const revalidate = 30;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  const client = createClient();
  const category = await client.getByUID("category", slug);

  return {
    title: category.data.name,
    description: category.data.summary,
    openGraph: {
      title: category.data.name || "",
      description: category.data.summary || "",
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const categories = await client.getAllByType("category");

  return categories.map((category) => ({
    slug: category.uid,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const client = createClient();

  const { slug } = await params;
  const categoryUid = slug;

  const categories = await client.getAllByType("category");
  const allCategories = categories;

  let posts;
  let currentCategoryName = "All Posts";
  let currentCategoryDescription = "Explore all our gaming content";
  
  if(categoryUid == "all-posts") {
    posts = await client.getAllByType("post", {
      fetchLinks: ["category.name", "author.name", "author.avatar"],
    });
    currentCategoryName = "All Posts";
    currentCategoryDescription = "Discover all gaming articles, reviews, and news";
  } else {
    const category = await client.getByUID("category", categoryUid);
    posts = await client.getAllByType("post", {
      filters: [filter.at("my.post.category", category.id)],
      fetchLinks: ["category.name", "author.name", "author.avatar"],
    });
    currentCategoryName = category.data.name || categoryUid;
    currentCategoryDescription = category.data.summary || `Explore ${category.data.name} games and content`;
  }

  // Category emojis mapping
  const categoryEmojis: { [key: string]: string } = {
    'action': '⚔️',
    'rpg': '🧙',
    'strategy': '🎯',
    'adventure': '🗺️',
    'sports': '⚽',
    'racing': '🏎️',
    'puzzle': '🧩',
    'horror': '👻',
    'shooter': '🔫',
    'simulation': '🛠️',
    'all-posts': '🎮'
  };

  const getEmojiForCategory = (uid: string) => {
    return categoryEmojis[uid.toLowerCase()] || '🎮';
  };

  return (
    <>
      {/* Hero Section for Category */}
      <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 mb-8">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {getEmojiForCategory(categoryUid)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {currentCategoryName}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
              {currentCategoryDescription}
            </p>
            <div className="text-sm text-gray-300">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} found
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* CATEGORY NAVIGATION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            🎯 Browse Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/categories/all-posts"
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                categoryUid === "all-posts"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:bg-zinc-700 shadow-md"
              }`}
            >
              <span className="mr-2">🎮</span>
              All Posts
            </Link>
            {allCategories.map((cat) => (
              <Link
                key={cat.uid}
                href={`/categories/${cat.uid}`}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  categoryUid === cat.uid
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:bg-zinc-700 shadow-md"
                }`}
              >
                <span className="mr-2">{getEmojiForCategory(cat.uid)}</span>
                {cat.data.name}
              </Link>
            ))}
          </div>
        </div>

        {/* POSTS SECTION */}
        {posts.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Latest Articles
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </div>

            {/* POSTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.map((post: any) => (
                <div key={post.uid} className="group">
                  <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    <CategoryArticleCard 
                      slug={post.uid} 
                      title={post.data.title} 
                      excerpt={post.data.excerpt} 
                      coverImage={post.data.coverImage?.url || ""} 
                      author={{
                        name: post.data.author?.data?.name || "Unknown",
                        avatar: post.data.author?.data?.avatar?.url
                      }} 
                      date={post.data.date || ""} 
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Section */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-700 rounded-xl">
                <span className="text-gray-600 dark:text-gray-300 font-semibold">
                  🎯 You've reached the end of {currentCategoryName.toLowerCase()} articles
                </span>
              </div>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="text-8xl mb-6">😕</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              No Articles Found
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We don't have any articles in the {currentCategoryName.toLowerCase()} category yet.
            </p>
            <Link
              href="/categories/all-posts"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">🎮</span>
              Browse All Articles
            </Link>
          </div>
        )}

        {/* Related Categories Section */}
        {posts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200 dark:border-zinc-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              🎯 Explore Other Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {allCategories
                .filter(cat => cat.uid !== categoryUid)
                .slice(0, 8)
                .map((cat) => (
                  <Link
                    key={cat.uid}
                    href={`/categories/${cat.uid}`}
                    className="group p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-700 rounded-xl hover:from-purple-200 hover:to-pink-200 dark:hover:from-zinc-700 dark:hover:to-zinc-600 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {getEmojiForCategory(cat.uid)}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {cat.data.name}
                    </h3>
                  </Link>
                ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
