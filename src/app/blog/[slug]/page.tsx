// app/blog/[slug]/page.tsx

import { createClient } from "@/lib/prismicio";
import { notFound } from "next/navigation";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/helpers"; // ✅
import ShareButtons from "@/Components/ShareButtons";


interface Props {
  params: {
    slug: string;
  };
}


export default async function BlogPage({ params }: Props) {
  const client = createClient();
  const post = await client.getByUID("post", params.slug);

  if (!post) return notFound();

  return (
    <article className="w-full max-w-[1000px] mx-auto px-4 py-8 border">
      <div className="flex items-center space-x-3 mb-4">
        {post.data.author && "data" in post.data.author && post.data.author.data?.avatar?.url ? (
          <Image
            src={post.data.author.data.avatar.url || "/public/assets/images/default-avatar.png"}
            width={24}
            height={24}
            alt={post.data.author.data.name || "Author"}
            className="rounded-full"
          />
        ) : null}
        <p>{post.data.author && "data" in post.data.author ? post.data.author.data?.name : "Unknown Author"}</p>
        <p className="text-sm text-gray-500">{post.data.date ? formatDate(post.data.date as string) : ""}</p>
      </div>

      <h1 className="text-3xl font-bold mb-4">
        {asText(post.data.title)}
      </h1>

      {post.data.coverImage?.url ? (
        <Image
          src={post.data.coverImage.url}
          width={1000}
          height={500}
          alt={asText(post.data.title)}
          className="object-cover mb-6"
        />
      ) : null}

      <div className="prose max-w-none">
        <PrismicRichText field={post.data.content} /> 
      </div>
      <ShareButtons />
    </article>
  );
}
