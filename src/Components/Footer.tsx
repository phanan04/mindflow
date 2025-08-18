export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-900 border-t border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row gap-8 py-8 border-b border-gray-300 dark:border-gray-700">
          
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Đăng Ký Nhận Tin
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Cập nhật các bài viết và thông tin mới nhất của chúng tôi
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Nhận các bài viết mới nhất được gửi trực tiếp đến hộp thư của bạn. Tham gia cùng hàng nghìn độc giả tin tưởng nội dung của chúng tôi.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xblkpjbl"
            method="POST"
            className="flex-1 space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Địa Chỉ Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nhập địa chỉ email của bạn"
                required
                className="w-full py-3 px-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                name="subscribe"
                value="Yes"
                className="w-4 h-4 accent-purple-500 rounded"
              />
              <span className="text-gray-600 dark:text-gray-300">Tôi đồng ý nhận cập nhật newsletter</span>
            </label>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Đăng Ký Ngay
            </button>
          </form>
        </div>

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-white">M</span>
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">MindFlow</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span>© 2025 MindFlow. All rights reserved.</span>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Chính Sách</a>
              <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Điều Khoản</a>
              <a href="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Liên Hệ</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
