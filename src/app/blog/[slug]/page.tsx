// app/blog/[slug]/page.tsx
import { createClient } from "@/lib/prismicio";
import { notFound } from "next/navigation";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/helpers"; // ✅
import ShareButtons from "@/Components/ShareButtons";

type PageProps = {
  params: { slug: string };
};

export default async function BlogPage({ params }: PageProps) {
  const client = createClient();
  const post = await client.getByUID("post", params.slug);

  if (!post) return notFound();

  return (
    <article className="w-full max-w-[1000px] mx-auto px-4 py-8 border">
      <div className="flex items-center space-x-3 mb-4">
        {post.data.author?.data?.avatar?.url && (
          <Image
            src={post.data.author.data.avatar.url}
            width={24}
            height={24}
            alt={post.data.author.data.name} 
            className="rounded-full"
          />
        )}
        <p>{post.data.author.data.name}</p>
        <p className="text-sm text-gray-500">{formatDate(post.data.date)}</p>
      </div>

      <h1 className="text-3xl font-bold mb-4">
        {asText(post.data.title)}
      </h1>

      <Image
        src={post.data.coverImage.url}
        width={1000}
        height={500}
        alt={asText(post.data.title)}
        className="object-cover mb-6"
      />

      <div className="prose max-w-none">
        <PrismicRichText field={post.data.content} /> 
      </div>
      <ShareButtons />
    </article>
  );
}
