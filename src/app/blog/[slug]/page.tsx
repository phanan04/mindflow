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
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <article className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-full px-6 py-2 mb-6">
            <span className="text-lg">📰</span>
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Blog Article
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight">
            {typeof post.data.title === "string"
              ? post.data.title
              : asText(post.data.title) || ""}
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            {isFilled.contentRelationship(post?.data?.author) ? (
              <div className="relative">
                <Image
                  src={
                    post.data.author.data?.avatar.url ||
                    "/public/assets/images/default-avatar.png"
                  }
                  width={48}
                  height={48}
                  alt={post.data.author?.data?.name || "Author"}
                  className="relative rounded-full border-2 border-white dark:border-zinc-700 shadow-lg"
                />
              </div>
            ) : null}

            <div className="text-left">
              {post.data.author &&
              "data" in post.data.author &&
              post.data.author.data ? (
                <Link
                  href={`/authors/${post.data.author.uid}`}
                  className="block text-lg font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
                >
                  {post.data.author.data.name || "Unknown Author"}
                </Link>
              ) : (
                <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  Unknown Author
                </p>
              )}
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {post.data.date ? formatDate(post.data.date as string) : ""}
              </p>
            </div>
          </div>
        </div>

        {post.data.coverImage?.url ? (
          <div className="relative mb-12 rounded-lg overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-700">
            <Image
              src={post.data.coverImage.url}
              width={1200}
              height={600}
              alt={post.data.title || ""}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        ) : null}

        <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-zinc-800 dark:prose-headings:text-zinc-200 prose-p:text-zinc-600 dark:prose-p:text-zinc-300 prose-a:text-zinc-700 dark:prose-a:text-zinc-300 hover:prose-a:text-zinc-900 dark:hover:prose-a:text-white prose-strong:text-zinc-800 dark:prose-strong:text-zinc-200">
            <PrismicRichText field={post.data.content} />
          </div>

          {/* Share Buttons - Desktop version */}
          <div className="hidden md:block mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-600">
            <ShareButtons />
          </div>
        </div>

        {/* Share Buttons - Mobile version */}
        <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-8 mb-12 block md:hidden">
          <ShareButtons />
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-8">
          <GiscusComments />
        </div>
      </article>
    </div>
  );
}
