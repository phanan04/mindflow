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

  let posts;
  let currentCategoryName = "All Posts";

  if (categoryUid == "all-posts") {
    posts = await client.getAllByType("post", {
      fetchLinks: ["category.name", "author.name", "author.avatar"],
    });
  } else {
    const category = await client.getByUID("category", categoryUid);
    posts = await client.getAllByType("post", {
      filters: [filter.at("my.post.category", category.id)],
      fetchLinks: ["category.name", "author.name", "author.avatar"],
    });
    currentCategoryName = category.data.name || categoryUid;
  }

  return (
    <>
      <section className="bg-white dark:bg-zinc-900 py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
              {currentCategoryName}
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
            Browse Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.uid}
                href={`/categories/${cat.uid}`}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  categoryUid === cat.uid
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                    : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border-2 border-zinc-200 dark:border-0"
                }`}
              >
                {cat.data.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            Bài Viết Mới Nhất
          </h2>
          <div className="w-20 h-1 bg-zinc-900 dark:bg-white rounded-full"></div>
        </div>

        {/* POSTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {posts.map((post: any) => (
            <div key={post.uid} className="group">
              <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow duration-200 overflow-hidden">
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
          <div className="inline-flex items-center justify-center px-8 py-4 mb-4 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 rounded-xl">
            <span className="text-zinc-600 dark:text-zinc-300 font-semibold">
              🎯 Bạn đã đến cuối bài viết
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
