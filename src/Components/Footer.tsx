export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-800 border-t border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white px-4">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-8 py-6">
        
        {/* Cột bên trái */}
        <div className="flex-1 p-4">
          <h2 className="text-lg font-semibold mb-2">Subscribe via Email</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Get the latest posts delivered straight to your inbox.
          </p>
        </div>

        {/* Cột bên phải */}
        <form
          action="https://formspree.io/f/xblkpjbl"
          method="POST"
          className="flex-1 flex flex-col gap-4 p-4"
        >
          <label htmlFor="email" className="text-sm font-medium">
            Enter your email here
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            className="py-2 px-4 w-full border border-zinc-300 dark:border-zinc-600 dark:bg-zinc-700"
          />
          
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="subscribe"
              value="Yes"
              className="accent-blue-500"
            />
            <span>Yes, subscribe me to your newsletter</span>
          </label>

          <button
            type="submit"
            className="bg-black text-white py-2 hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-300 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}
