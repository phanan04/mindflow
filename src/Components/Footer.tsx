export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row gap-8 py-8 border-b border-zinc-200 dark:border-zinc-700">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-lg">📧</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-slate-100">
                  Đăng Ký Nhận Tin
                </h2>
                <p className="text-zinc-600 dark:text-slate-400 text-sm">
                  Cập nhật các bài viết và thông tin mới nhất
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xblkpjbl"
            method="POST"
            className="flex-1 space-y-4"
          >
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Địa Chỉ Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nhập địa chỉ email của bạn"
                required
                className="w-full py-3 px-4 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-lg text-zinc-800 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-colors duration-200"
              />
            </div>

            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                name="subscribe"
                value="Yes"
                className="w-4 h-4 accent-slate-600 rounded"
              />
              <span className="text-zinc-600 dark:text-slate-400">
                Tôi đồng ý nhận cập nhật newsletter
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-300 py-3 px-6 rounded-lg font-medium transition-colors duration-200"
            >
              Đăng Ký Ngay
            </button>
          </form>
        </div>

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">G</span>
            </div>
            <span className="text-zinc-700 dark:text-slate-300 font-medium">
              GameFlow
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-slate-400">
            <span>© 2025 GameFlow. All rights reserved.</span>
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#"
                className="hover:text-zinc-700 dark:hover:text-slate-200 transition-colors duration-200"
              >
                Chính Sách
              </a>
              <a
                href="#"
                className="hover:text-zinc-700 dark:hover:text-slate-200 transition-colors duration-200"
              >
                Điều Khoản
              </a>
              <a
                href="/contact"
                className="hover:text-zinc-700 dark:hover:text-slate-200 transition-colors duration-200"
              >
                Liên Hệ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
