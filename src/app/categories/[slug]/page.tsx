
import { createClient } from "../../../lib/prismicio";
import CategoryArticleCard from "../../../Components/CategoryArticleCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as prismic from "@prismicio/client";
import { asText } from "@prismicio/helpers";

interface AuthorData {
  data?: {
    name?: string;
    avatar?: {
      url?: string;
    };
  };
}

interface PostData {
  uid: string;
  data: {
    title: prismic.RichTextField;
    excerpt: prismic.RichTextField;
    coverImage: { url?: string | null };
    author: AuthorData;
    date?: string;
    category?: string;
  };
}


type Props = {
  params: {
    slug: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const client = createClient();
  
  const { slug } = await params;
  const categoryUid = slug;

  let posts: PostData[] = [];
  let category = null;

  // Handle special case for "allposts"
  if (categoryUid === "allposts") {
    posts = await client.getAllByType("post", {
      orderings: {
        field: "my.post.date",
        direction: "desc",
      },
      pageSize: 20,
      fetchLinks: ["author.name", "author.avatar"],
    });
  } else {
    // Fetch category và posts theo category
    category = await client.getByUID("category", categoryUid).catch(() => null);

    if (!category) {
      notFound();
    }

    posts = await client.getAllByType("post", {
      predicates: [
        prismic.filter.at("my.post.category", category.id),
      ],
      orderings: {
        field: "my.post.date",
        direction: "desc",
      },
      pageSize: 20,
      fetchLinks: ["author.name", "author.avatar"],
    });
  }

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 py-8">
      {/* CATEGORY MENU */}
      <div className="flex flex-row gap-4 justify-center pb-8">
        <Link href="/categories/allposts" className="text-xl hover:text-blue-500">
          All Posts
        </Link>
        <Link href="/categories/action" className="text-xl hover:text-blue-500">
          Action
        </Link>
        <Link href="/categories/adventure" className="text-xl hover:text-blue-500">
          Adventure
        </Link>
        <Link href="/categories/rpg" className="text-xl hover:text-blue-500">
          RPG
        </Link>
      </div>
      {/* CATEGORY TITLE */}
      <h2 className="text-2xl font-bold text-center pb-6 uppercase">{categoryUid}</h2>

      {/* POSTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <CategoryArticleCard
            slug={post.uid}
            key={post.uid}
            title={asText(post.data.title)}
            excerpt={asText(post.data.excerpt)}
            coverImage={post.data.coverImage.url ?? "/fallback.jpg"}
            author={{
              name: post.data.author?.data?.name ?? "Unknown Author",
              avatar: post.data.author?.data?.avatar?.url,
            }}
            date={post.data.date ?? new Date().toISOString()}
          />
        ))}
      </div>
    </div>
  );
}