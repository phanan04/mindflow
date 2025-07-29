import Link from "next/link";

const Header = () => {
  return (
    <header
      className="bg-white py-2 pr-0 pl-0
 text-black dark:bg-zinc-900 dark:text-white"
      role="banner"
    >
      <div className="bg-white px-2 py-4 text-center dark:bg-zinc-900 dark:text-white">
        <Link href="/">
          <h1 className="font-serif font-bold text-black text-6xl dark:bg-zinc-900 dark:text-white">
            NextGame
          </h1>
        </Link>

        {/*Menu*/}
        <nav className="hidden sm:flex mt-6 flex-wrap justify-center items-center gap-6 text-neutral-500 text-sm font-semibold dark:bg-zinc-900 dark:text-white">
          <Link href="/" className="hover:text-black dark:hover:text-gray-500">
            Home
          </Link>
          <Link
            href="/categories/allposts"
            className="hover:text-black dark:hover:text-gray-500"
          >
            Category
          </Link>
          <Link
            href="/authors/about"
            className="hover:text-black dark:hover:text-gray-500"
          >
            About
          </Link>
          <Link
            href="/contact/contactme"
            className="hover:text-black dark:hover:text-gray-500"
          >
            Contact
          </Link>
        </nav>

        {/* <Image
          src="/assets/images/header_image.jpg"
          width={1000}
          height={400}
          alt="header_image"
          className="object-fit mx-auto py-4 h-[400px]"
        /> */}
      </div>
    </header>
  );
};

export default Header;
