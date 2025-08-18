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
    <div className="max-w-screen-xl mx-auto px-4 py-12 flex-1">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
          About NextGame
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          Chia sẻ đam mê, review & cập nhật thế giới game 🎮
        </p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-20 text-center">
        <Link href="/categories/all-posts">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="font-semibold text-lg mb-1">Review</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Đánh giá chi tiết gameplay & đồ họa.
            </p>
          </div>
        </Link>

        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform">
          <div className="text-3xl mb-3">📰</div>
          <h3 className="font-semibold text-lg mb-1">Tin tức</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Cập nhật game & sự kiện nóng hổi.
          </p>
        </div>

        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform">
          <div className="text-3xl mb-3">🕹️</div>
          <h3 className="font-semibold text-lg mb-1">Hướng dẫn</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Tips & tricks để chơi tốt hơn.
          </p>
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-screen-xl mx-auto mb-10">
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-8 text-center">
          OUR TEAM
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <div
              key={author.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <Link
                href={`/authors/${author.uid}`}
                className="block text-center"
              >
                <div className="flex flex-row gap-2 justify-between items-center">
                  <Image
                    src={author.data.avatar.url || ""}
                    alt={author.data.avatar.alt || "Author"}
                    width={100}
                    height={100}
                    className="rounded-full object-cover border-4 border-indigo-500/50 shadow-md mb-4 transition-transform hover:scale-105"
                  />
                  <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-1">
                    {author.data.name}
                  </h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <a
          href="/"
          className="px-8 py-4 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700"
        >
          Tham gia cộng đồng Discord
        </a>
      </div>
    </div>
  );
}
