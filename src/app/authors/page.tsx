import { createClient } from "../../lib/prismicio";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Giới Thiệu",
    description: "Tác Giả - Đội Ngũ Của Chúng Tôi",
    openGraph: {
      title: "Giới Thiệu",
      description: "Tác Giả - Đội Ngũ Của Chúng Tôi",
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
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800 rounded-full px-6 py-2 mb-8">
          <span className="text-lg">🎮</span>
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            GameFlow Team
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
          Giới Thiệu Về Chúng Tôi
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Chia sẻ đam mê, review & cập nhật thế giới game. Nơi gặp gỡ của những
          game thủ đam mê và chuyên nghiệp.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent"></div>
      </div>

      {/* Features Grid */}

      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">
            What We Do
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Chúng tôi mang đến những nội dung chất lượng cao về game và gaming
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-lg border hover:shadow-md transition-shadow duration-200">
            <Link href="/categories/all-posts" className="block">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-2xl mb-6 mx-auto">
                🎮
              </div>
              <h3 className="font-bold text-xl mb-3 text-zinc-800 dark:text-zinc-200 text-center">
                Game Reviews
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-center leading-relaxed">
                Đánh giá chi tiết về gameplay, đồ họa, âm thanh và trải nghiệm
                tổng thể của các tựa game mới nhất.
              </p>
            </Link>
          </div>

          <div className="p-8 bg-white dark:bg-zinc-900 rounded-lg border hover:shadow-md transition-shadow duration-200">
            <div className="block">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-2xl mb-6 mx-auto">
                📰
              </div>
              <h3 className="font-bold text-xl mb-3 text-zinc-800 dark:text-zinc-200 text-center">
                Gaming News
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-center leading-relaxed">
                Cập nhật những tin tức nóng hổi về game, sự kiện esports và xu
                hướng gaming mới nhất.
              </p>
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-zinc-900 rounded-lg border hover:shadow-md transition-shadow duration-200">
            <div className="block">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-2xl mb-6 mx-auto">
                🕹️
              </div>
              <h3 className="font-bold text-xl mb-3 text-zinc-800 dark:text-zinc-200 text-center">
                Gaming Guides
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-center leading-relaxed">
                Hướng dẫn chi tiết, tips & tricks giúp bạn chơi game tốt hơn và
                đạt thành tích cao.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent"></div>
      </div>

      <div className="bg-zinc-50 dark:bg-black">
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">
              Meet Our Team
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Đội ngũ những game thủ đam mê và chuyên nghiệp, luôn sẵn sàng chia
              sẻ kinh nghiệm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <div
                key={author.id}
                className="bg-white dark:bg-zinc-900 rounded-lg border hover:shadow-md transition-shadow duration-300 transform hover:scale-102 overflow-hidden"
              >
                <Link
                  href={`/authors/${author.uid}`}
                  className="block p-8 text-center"
                >
                  <div className="inline-block">
                    <Image
                      src={author.data.avatar.url || ""}
                      alt={author.data.avatar.alt || "Author"}
                      width={120}
                      height={120}
                      className="rounded-full object-cover mb-6 mx-auto"
                    />
                  </div>
                  <h4 className="font-bold text-xl text-zinc-800 dark:text-zinc-200 mb-2">
                    {author.data.name}
                  </h4>
                  <div className="w-12 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full mx-auto"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-20 text-center">
        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg border p-12">
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
              Join Our Gaming Community
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
              Tham gia cộng đồng game thủ đông đảo, chia sẻ đam mê và khám phá
              những trải nghiệm gaming tuyệt vời cùng chúng tôi.
            </p>
            <a
              href="https://discord.gg/ZjTZUhdc"
              className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200"
            >
              <span>🎮</span>
              Tham gia cộng đồng Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
