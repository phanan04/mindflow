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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="relative max-w-screen-xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">🎮</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">MindFlow Gaming Community</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Chia sẻ đam mê, review & cập nhật thế giới game. Nơi gặp gỡ của những game thủ đam mê và chuyên nghiệp.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Chúng tôi mang đến những nội dung chất lượng cao về game và gaming
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Link href="/categories/all-posts" className="relative block">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                🎮
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-200 text-center">
                Game Reviews
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                Đánh giá chi tiết về gameplay, đồ họa, âm thanh và trải nghiệm tổng thể của các tựa game mới nhất.
              </p>
            </Link>
          </div>

          <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                📰
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-200 text-center">
                Gaming News
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                Cập nhật những tin tức nóng hổi về game, sự kiện esports và xu hướng gaming mới nhất.
              </p>
            </div>
          </div>

          <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 mx-auto">
                🕹️
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-200 text-center">
                Gaming Guides
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                Hướng dẫn chi tiết, tips & tricks giúp bạn chơi game tốt hơn và đạt thành tích cao.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Meet Our Team
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Đội ngũ những game thủ đam mê và chuyên nghiệp, luôn sẵn sàng chia sẻ kinh nghiệm
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <div
                key={author.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link
                  href={`/authors/${author.uid}`}
                  className="relative block p-8 text-center"
                >
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"></div>
                    <Image
                      src={author.data.avatar.url || ""}
                      alt={author.data.avatar.alt || "Author"}
                      width={120}
                      height={120}
                      className="relative rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl mb-6 mx-auto transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">
                    {author.data.name}
                  </h4>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Gaming Community
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Tham gia cộng đồng game thủ đông đảo, chia sẻ đam mê và khám phá những trải nghiệm gaming tuyệt vời cùng chúng tôi.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
