import SearchButton from "@/app/search/SearchButton";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="w-full py-2 px-4 text-black dark:bg-zinc-900/40 dark:text-white"
      role="banner"
    >
      <div className="mx-auto flex items-center justify-between relative">
        {/* Cột trái: Menu */}
        <div className="flex items-center justify-start gap-6 text-sm font-semibold text-neutral-600 dark:text-neutral-300 w-1/3">
          <nav className="hidden sm:flex items-center gap-6">
            <Link href="/" className="hover:text-black dark:hover:text-white">
              Home
            </Link>
            <Link
              href="/categories/all-posts"
              className="hover:text-black dark:hover:text-white"
            >
              Category
            </Link>
            <Link
              href="/authors/about"
              className="hover:text-black dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-black dark:hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <h1 className="font-serif font-bold text-4xl text-black dark:text-white">
              NextGame
            </h1>
          </Link>
        </div>

        <div className="flex justify-end items-center gap-4 text-lg text-neutral-600 hover:text-blue-700 dark:text-neutral-300 w-1/3">
          <SearchButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
