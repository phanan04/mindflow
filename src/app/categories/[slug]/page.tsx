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
  let currentCategoryDescription = "Khám phá tất cả bài viết, đánh giá và tin tức về trò chơi";

  if (categoryUid == "all-posts") {
    posts = await client.getAllByType("post", {
      fetchLinks: ["category.name", "author.name", "author.avatar"],
    });
    currentCategoryName = "All Posts";
    currentCategoryDescription =
      "Khám phá tất cả bài viết, đánh giá và tin tức về trò chơi";
  } else {
    const category = await client.getByUID("category", categoryUid);
    posts = await client.getAllByType("post", {
      filters: [filter.at("my.post.category", category.id)],
      fetchLinks: ["category.name", "author.name", "author.avatar"],
    });
    currentCategoryName = category.data.name || categoryUid;
    currentCategoryDescription =
      category.data.summary ||
      `Khám phá ${category.data.name} trò chơi và nội dung`;
  }

  const categoryEmojis: { [key: string]: string } = {
    action: "⚔️",
    rpg: "🧙",
    strategy: "🎯",
    adventure: "🗺️",
    sports: "⚽",
    racing: "🏎️",
    puzzle: "🧩",
    horror: "👻",
    shooter: "🔫",
    simulation: "🛠️",
    "all-posts": "🎮",
  };

  const getEmojiForCategory = (uid: string) => {
    return categoryEmojis[uid.toLowerCase()] || "🎮";
  };

  return (
    <>
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
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            🎯 Browse Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
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

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Bài Viết Mới Nhất
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
                    avatar: post.data.author?.data?.avatar?.url,
                  }}
                  date={post.data.date || ""}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center px-8 py-4 mb-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-700 rounded-xl">
            <span className="text-gray-600 dark:text-gray-300 font-semibold">
              🎯 Bạn đã đến cuối bài viết
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
