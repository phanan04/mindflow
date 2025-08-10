export default function Footer() {
  return (
    <footer className="bg-gray-100 w-full mx-auto px-4 dark:bg-zinc-900/40 dark:text-white ">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-6 md:gap-0 py-8">
        {/* Cột bên trái */}
        <div className="flex flex-col w-1/2 gap-4 p-4 dark:text-white">
          <h1>SUBSCRIBE VIA EMAIL</h1>
        </div>
        {/* Cột bên phải */}
        <form
          action="https://formspree.io/f/xblkpjbl"
          method="POST"
          className="flex flex-col gap-4 p-4 w-full md:w-1/2  dark:text-white">
            <h3>Enter your email here</h3>
            <input type="email" name = "email" className="py-2 px-4 w-full border" />
            <label className="flex items-center space-x-2  dark:text-white">
              <input type="checkbox" name="subscribe" value="Yes" />
              <span>Yes, subscribe me to your newsletter</span>
            </label>
            <button type ="submit" className="bg-black text-white py-2 dark:bg-white dark:text-black">
              Subscribe
            </button>
        </form>
      </div>
    </footer>
  );
}
