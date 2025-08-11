import { createClient } from "../../../lib/prismicio";
import CategoryArticleCard from "../../../Components/card/CategoryArticleCard";
import Link from "next/link";
import { Metadata } from "next";

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

interface PostData {
  uid: string;
  data: {
    title: string | null;
    excerpt: string | null;
    coverImage: { url?: string | null };
    author: {
      data?: {
        name?: string;
        avatar?: { url?: string };
      };
    };
    date?: string | null;
    category?: string[];
  };
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

  let posts: PostData[] = [];
  let category = null;
  let pageTitle = "All Posts";

  const queryOptions = {
    orderings: {
      field: "my.post.date",
      direction: "desc" as const,
    },
    pageSize: 20,
    fetchLinks: ["author.name", "author.avatar", "category.name"],
  };

  const allPosts = await client.getAllByType("post", queryOptions);
  const isAllPosts = categoryUid === "all-posts";

  if (!isAllPosts) {
    category = await client.getByUID("category", categoryUid);
    pageTitle = category?.data.name || categoryUid;
  }

  const prismicPosts = isAllPosts
    ? allPosts
    : allPosts.filter((post) => {
        const postCategories = post.data.category || [];
        return postCategories.some((cat: any) => {
          return cat?.category?.uid === categoryUid;
        });
      });

  posts = prismicPosts.map((post) => ({
    uid: post.uid,
    data: {
      title: post.data.title || null,
      excerpt: post.data.excerpt || null,
      coverImage: post.data.coverImage,
      author: {
        data: {
          name: (post.data.author as any)?.data?.name || undefined,
          avatar: (post.data.author as any)?.data?.avatar?.url
            ? { url: (post.data.author as any).data.avatar.url }
            : undefined,
        },
      },
      date: post.data.date || undefined,
      category:
        post.data.category
          ?.map((cat: any) => cat?.category?.uid)
          .filter(Boolean) || [],
    },
  }));

  const allCategories = await client.getAllByType("category");

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
            {cat.uid === "all-posts" ? "All Posts" : cat.data.name}
          </Link>
        ))}
      </div>

      {/* POSTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <CategoryArticleCard
            slug={post.uid}
            key={post.uid}
            title={post.data.title || ""}
            excerpt={post.data.excerpt || ""}
            coverImage={post.data.coverImage.url ?? "/fallback.jpg"}
            author={{
              name: post.data.author?.data?.name ?? "Unknown Author",
              avatar: post.data.author?.data?.avatar?.url,
            }}
            date={post.data.date || new Date().toISOString()}
          />
        ))}
      </div>
    </div>
  );
}
