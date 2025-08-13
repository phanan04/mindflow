import { createClient } from "../../../lib/prismicio";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { asText, filter } from "@prismicio/client";
import { formatDate } from "../../../lib/formatDate";

export const revalidate = 30;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const client = createClient();
  const author = await client.getByUID("author", slug);

  return {
    title: author.data.name,
    description: author.data.bio,
    openGraph: {
      title: author.data.name || "",
      description: author.data.bio || "",
      type: "profile",
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const authors = await client.getAllByType("author");

  return authors.map((author) => ({
    slug: author.uid,
  }));
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const client = createClient();
  const author = await client.getByUID("author", slug);
  
  const posts = await client.getAllByType("post", {
    filters: [
      filter.at("my.post.author", author.id)
    ],  
  });

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 flex-1">
      <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-6">
        {/* INFO */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-row md:flex-row gap-4 items-center md:items-start w-1/2">
            <Image
              src={author.data.avatar.url || "/assets/images/default-avatar.png"}
              alt={author.data.avatar.alt || "Author"}
              width={100}
              height={100}
              className="rounded-full object-cover border shadow-sm"
            />
            <div>
              <p className="font-bold">{author.data.name || ""}</p>
              <p className="italic text-gray-500">Author</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 w-full">
            {author.data.bio || ""}
          </p>
        </div>

        {/* Danh sách bài viết */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Bài viết của {author.data.name} ({posts.length})
          </h2>
          
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div key={post.id} className="rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Link href={`/blog/${post.uid}`} >
                    <div className="flex gap-4">
                      {post.data.coverImage?.url && (
                        <div className="flex w-1/4">
                          <Image
                            src={post.data.coverImage.url}
                            alt={post.data.coverImage.alt || ""}
                            width={120}
                            height={80}
                            className="rounded-lg object-cover"
                          />
                        </div>
                      )}
                      <div className="w-3/4 flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                          {post.data.title || "Untitled"}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {post.data.date && formatDate(post.data.date)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">
                {author.data.name} chưa có bài viết nào.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
