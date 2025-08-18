import { createClient } from "../../lib/prismicio";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    description: "Authors - Our Team",
    openGraph: {
      title: "About",
      description: "Authors - Our Team",
      type: "website",
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

export default async function AuthorsPage() {
  const client = createClient();
  const authors = await client.getAllByType("author");

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 flex-1">
      <div className="w-full max-w-[1000px] mx-auto">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 py-2 border-b border-gray-300 dark:border-gray-600">
          OUR TEAM
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {authors.map((author) => (
            <div key={author.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg dark:hover:bg-gray-800/80 transition-shadow">
              <Link href={`/authors/${author.uid}`} className="block">
                <div className="flex flex-col items-center">
                  <Image
                    src={author.data.avatar.url || ""}
                    alt={author.data.avatar.alt || "Author"}
                    width={80}
                    height={80}
                    className="rounded-full object-cover border shadow-sm mb-4"
                  />
                  <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                    {author.data.name || ""}
                  </h4>
                  <p className="italic text-gray-500 dark:text-gray-400 mb-3">Author</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
