import { createClient } from "../../../lib/prismicio";
import { Metadata } from "next";
import Image from "next/image";
import { asText } from "@prismicio/client";

export const revalidate = 30;

export async function generateMetadata({
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const client = createClient();
  const [author] = await client.getAllByType("author");

  return {
    title: typeof author.data.name === 'string' ? author.data.name : asText(author.data.name) || '',
    description: typeof author.data.bio === 'string' ? author.data.bio : asText(author.data.bio) || '',
    openGraph: {
      title: typeof author.data.name === 'string' ? author.data.name : asText(author.data.name) || '',
      description: typeof author.data.bio === 'string' ? author.data.bio : asText(author.data.bio) || '',
      type: "profile"
    }
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
}: {
  params: Promise<{ slug: string }>;
}) {
  const client = createClient();
  const [author] = await client.getAllByType("author");

  return (
      <div className="max-w-screen-xl mx-auto h-auto">
      <h1 className="text-2xl font-bold text-center pb-4">ABOUT</h1>
      <div className="flex flex-row gap-4 w-full max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-2">
          <h3><b>ABOUT ME</b></h3>
          <hr />
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <Image
                src={author.data.avatar.url || "/public/assets/images/default-avatar.png"}
                alt={author.data.avatar.alt || "Author"}
                width={100}
                height={100}
              />
                <div className="flex flex-col">
                    <p><b>{typeof author.data.name === 'string' ? author.data.name : asText(author.data.name) || ''}</b></p>
                    <p><i>Author</i></p>
                </div>
            </div>
            <div>
              <p>{typeof author.data.bio === 'string' ? author.data.bio : asText(author.data.bio) || ''}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
