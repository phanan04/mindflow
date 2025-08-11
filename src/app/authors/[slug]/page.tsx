import { createClient } from "../../../lib/prismicio";
import { Metadata } from "next";
import Image from "next/image";
import { asText } from "@prismicio/client";

export const revalidate = 30;

export async function generateMetadata({}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const client = createClient();
  const [author] = await client.getAllByType("author");

  return {
    title:
      typeof author.data.name === "string"
        ? author.data.name
        : asText(author.data.name) || "",
    description:
      typeof author.data.bio === "string"
        ? author.data.bio
        : asText(author.data.bio) || "",
    openGraph: {
      title:
        typeof author.data.name === "string"
          ? author.data.name
          : asText(author.data.name) || "",
      description:
        typeof author.data.bio === "string"
          ? author.data.bio
          : asText(author.data.bio) || "",
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

export default async function AuthorPage({}: {
  params: Promise<{ slug: string }>;
}) {
  const client = createClient();
  const [author] = await client.getAllByType("author");

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center pb-6">ABOUT</h1>
      <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            ABOUT ME
          </h3>
          <hr className="my-2 border-gray-300 dark:border-gray-600" />
          <div className="flex flex-row md:flex-row gap-4 items-center md:items-start">
            <Image
              src={
                author.data.avatar.url || "/assets/images/default-avatar.png"
              }
              alt={author.data.avatar.alt || "Author"}
              width={100}
              height={100}
              className="rounded-full object-cover border shadow-sm"
            />
            <div>
              <p className="font-bold">
                {typeof author.data.name === "string"
                  ? author.data.name
                  : asText(author.data.name) || ""}
              </p>
              <p className="italic text-gray-500">Author</p>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            {typeof author.data.bio === "string"
              ? author.data.bio
              : asText(author.data.bio) || ""}
          </p>
        </div>
      </div>
    </div>
  );
}
