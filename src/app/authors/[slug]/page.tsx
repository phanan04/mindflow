import { createClient } from "../../../lib/prismicio";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { filter } from "@prismicio/client";

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
    filters: [filter.at("my.post.author", author.id)],
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex-1">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
          {/* HERO SECTION */}
          <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700 overflow-hidden">
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex flex-row gap-6 items-center sm:items-start">
                  <div className="relative">
                    <Image
                      src={
                        author.data.avatar.url ||
                        "/assets/images/default-avatar.png"
                      }
                      alt={author.data.avatar.alt || "Author"}
                      width={140}
                      height={140}
                      className="rounded-2xl object-cover border-4 border-white dark:border-zinc-600 shadow-xl"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                      {author.data.name || ""}
                    </h1>
                    <div className="flex items-center gap-2 justify-center sm:justify-start mb-4">
                      <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-full">
                        {posts.length} bài viết
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 lg:ml-8">
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                    Giới thiệu
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                    {author.data.bio || "Chưa có thông tin giới thiệu."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ARTICLES SECTION */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                Bài viết của {author.data.name}
              </h2>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <span className="text-lg font-semibold">{posts.length}</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  bài viết
                </span>
              </div>
            </div>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white dark:bg-zinc-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform overflow-hidden"
                  >
                    <Link href={`/blog/${post.uid}`} className="block">
                      <div className="flex flex-col">
                        {/* Image */}
                        {post.data.coverImage?.url && (
                          <div className="relative overflow-hidden h-48">
                            <Image
                              src={post.data.coverImage.url}
                              alt={post.data.coverImage.alt || ""}
                              width={400}
                              height={200}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        )}

                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                            📅 {post.data.date}
                          </div>

                          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 line-clamp-2 transition-colors duration-300">
                            {post.data.title || "Untitled"}
                          </h3>

                          <p className="text-zinc-600 dark:text-zinc-300 line-clamp-2 mb-4">
                            {post.data.excerpt}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-700">
                            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                              <span>👤 {author.data.name}</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                              <span className="text-sm font-semibold">
                                Đọc tiếp
                              </span>
                              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                                →
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-700">
                <div className="max-w-md mx-auto">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                    Chưa có bài viết
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {author.data.name} chưa có bài viết nào được đăng tải.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
