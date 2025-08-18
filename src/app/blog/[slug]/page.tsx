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

  return (
    <article className="w-full max-w-[1000px] mx-auto px-4 py-8 flex-1">
      <div className="flex items-center space-x-3 mb-4">
        {isFilled.contentRelationship(post?.data?.author) ? (
          <Image
            src={
              post.data.author.data?.avatar.url ||
              "/public/assets/images/default-avatar.png"
            }
            width={24}
            height={24}
            alt={post.data.author?.data?.name || "Author"}
            className="rounded-full"
          />
        ) : null}
        {post.data.author &&
        "data" in post.data.author &&
        post.data.author.data ? (
          <Link
            href={`/authors/${post.data.author.uid}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {post.data.author.data.name || "Unknown Author"}
          </Link>
        ) : (
          <p>Unknown Author</p>
        )}
        <p className="text-sm text-gray-500">
          {post.data.date ? formatDate(post.data.date as string) : ""}
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-4">
        {typeof post.data.title === "string"
          ? post.data.title
          : asText(post.data.title) || ""}
      </h1>

      {post.data.coverImage?.url ? (
        <Image
          src={post.data.coverImage.url}
          width={1000}
          height={500}
          alt={
            typeof post.data.title === "string"
              ? post.data.title
              : asText(post.data.title) || ""
          }
          className="object-cover mb-6"
        />
      ) : null}

      <div className="prose max-w-none">
        <PrismicRichText field={post.data.content} />
      </div>
      <ShareButtons />

      <div className="mt-12">
        <GiscusComments />
      </div>
    </article>
  );
}
