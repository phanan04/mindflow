import { createClient } from "@/lib/prismicio";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { PrismicRichText } from "@prismicio/react";
import { isFilled } from "@prismicio/helpers";
import ShareButtons from "@/Components/ShareButtons";
import { Metadata } from "next";
import { asText } from "@prismicio/client";
import GiscusComments from "@/Components/GiscusComments";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const client = createClient();
  const post = await client.getByUID("post", slug);

  return {
    title: post.data.title || "",
    description: post.data.excerpt || "",
    openGraph: {
      title: post.data.title || "",
      description: post.data.excerpt || "",
      images: post.data.coverImage?.url ? [post.data.coverImage.url] : [],
      type: "article",
    },
  };
}

export const revalidate = 30;

export async function generateStaticParams() {
  const client = createClient();
  const posts = await client.getAllByType("post");

  return posts.map((post) => ({
    slug: post.uid,
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const client = createClient();
  const post = await client.getByUID("post", slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <article className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-2xl">📰</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Blog Article
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
            {typeof post.data.title === "string"
              ? post.data.title
              : asText(post.data.title) || ""}
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            {isFilled.contentRelationship(post?.data?.author) ? (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-lg"></div>
                <Image
                  src={
                    post.data.author.data?.avatar.url ||
                    "/public/assets/images/default-avatar.png"
                  }
                  width={48}
                  height={48}
                  alt={post.data.author?.data?.name || "Author"}
                  className="relative rounded-full border-2 border-white dark:border-gray-700 shadow-lg"
                />
              </div>
            ) : null}

            <div className="text-left">
              {post.data.author &&
              "data" in post.data.author &&
              post.data.author.data ? (
                <Link
                  href={`/authors/${post.data.author.uid}`}
                  className="block text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {post.data.author.data.name || "Unknown Author"}
                </Link>
              ) : (
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Unknown Author
                </p>
              )}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {post.data.date ? formatDate(post.data.date as string) : ""}
              </p>
            </div>
          </div>
        </div>

        {post.data.coverImage?.url ? (
          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <Image
              src={post.data.coverImage.url}
              width={1200}
              height={600}
              alt={post.data.title || ""}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        ) : null}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-800 dark:prose-headings:text-gray-200 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-purple-600 dark:prose-a:text-purple-400 hover:prose-a:text-purple-700 dark:hover:prose-a:text-purple-300 prose-strong:text-gray-800 dark:prose-strong:text-gray-200">
            <PrismicRichText field={post.data.content} />
          </div>

          {/* Share Buttons - Desktop version */}
          <div className="hidden md:block mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
            <ShareButtons />
          </div>
        </div>

        {/* Share Buttons - Mobile version */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 mb-12 block md:hidden">
          <ShareButtons />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <GiscusComments />
        </div>
      </article>
    </div>
  );
}
