import { createClient } from "@/lib/prismicio";
import { FaEnvelope, FaYoutube, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

export default async function ContactPage() {
  const client = createClient();
  const [author] = await client.getAllByType("author");

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-screen-xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800 rounded-full px-6 py-2 mb-8">
          <span className="text-lg">📧</span>
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Liên Hệ Với Chúng Tôi</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
          Liên Hệ Với Chúng Tôi
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Có câu hỏi hoặc muốn hợp tác? Chúng tôi rất mong được kết nối và lắng nghe từ bạn.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-8">
              <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-lg" />
                </div>
                Thông Tin Liên Hệ
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-600 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Email</p>
                    <p className="font-semibold text-zinc-800 dark:text-zinc-200">{author.data.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-600 rounded-full flex items-center justify-center">
                    <FaPhone className="text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Điện Thoại</p>
                    <p className="font-semibold text-zinc-800 dark:text-zinc-200">{author.data.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Vị Trí</p>
                    <p className="font-semibold text-zinc-800 dark:text-zinc-200">Việt Nam</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-600">
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">Theo Dõi Chúng Tôi</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/pann4/" 
                    aria-label="Facebook" 
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                  >
                    <FaFacebook className="text-lg" />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Twitter" 
                    className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-900 transition-colors duration-200"
                  >
                    <FaXTwitter className="text-lg" />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Youtube" 
                    className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-200"
                  >
                    <FaYoutube className="text-lg" />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700">
                <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">Phản hồi</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Thường trong vòng 24 giờ</p>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700">
                <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">Giờ Làm Việc</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Thứ Hai - Thứ Sáu</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-8">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg flex items-center justify-center">
                <FaEnvelope className="text-lg" />
              </div>
              Liên Hệ Với Chúng Tôi
            </h2>

            <form
              action="https://formspree.io/f/xblkpjbl"
              method="POST"
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                    Họ *
                  </label>
                  <input
                    type="text"
                    name="First-Name"
                    required
                    className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg text-zinc-800 dark:text-zinc-200 placeholder-zinc-500 focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-colors duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                    Tên *
                  </label>
                  <input
                    type="text"
                    name="Last-Name"
                    required
                    className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-700  rounded-lg text-zinc-800 dark:text-zinc-200 placeholder-zinc-500 focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Địa chỉ Email  *
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-700  rounded-lg text-zinc-800 dark:text-zinc-200 placeholder-zinc-500 focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Chủ đề
                </label>
                <input
                  type="text"
                  name="Subject"
                  className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-700  rounded-lg text-zinc-800 dark:text-zinc-200 placeholder-zinc-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Tin nhắn *
                </label>
                <textarea
                  name="Message"
                  required
                  rows={6}
                  className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-700  rounded-lg text-zinc-800 dark:text-zinc-200 placeholder-zinc-500 focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project, question, or how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 py-4 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-12">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
                Bắt Đầu Cuộc Trò Chuyện?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
                Chúng tôi luôn sẵn sàng lắng nghe ý kiến, câu hỏi và đề xuất từ cộng đồng. 
                Hãy kết nối với chúng tôi ngay hôm nay!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${author.data.email}`}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200"
                >
                  <FaEnvelope />
                  Gửi Email
                </a>
                <a
                  href={`tel:${author.data.phone}`}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg font-semibold border border-zinc-200 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors duration-200"
                >
                  <FaPhone />
                  Gọi Cho Chúng Tôi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
