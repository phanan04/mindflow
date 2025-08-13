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
  
  if(categoryUid == "all-posts") {
    posts = await client.getAllByType("post", {
      fetchLinks: ["category.name", "author.name", "author.avatar"],
    });
  } else {
    const category = await client.getByUID("category", categoryUid);
    posts = await client.getAllByType("post", {
      filters: [filter.at("my.post.category", category.id)],
      fetchLinks: ["category.name", "author.name", "author.avatar"],
    });
  }

  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 py-8">
      {/* CATEGORY MENU */}
      <div className="flex flex-row gap-4 justify-center pb-4 flex-wrap">
        {allCategories.map((cat) => (
          <Link
            key={cat.uid}
            href={`/categories/${cat.uid}`}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
              categoryUid === cat.uid
                ? "bg-blue-500 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-500"
            }`}
          >
            {cat.data.name}
          </Link>
        ))}
      </div>

      {/* POSTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post: any) => (
          <CategoryArticleCard 
            key={post.uid}
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
        ))}
      </div>
    </div>
  );
}
