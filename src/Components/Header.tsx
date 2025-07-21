import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="bg-white py-2 pr-0 pl-0
 text-black"
      role="banner"
    >
      <div className="bg-white px-2 py-4 text-center">  
        <h1 className="font-serif font-bold text-black text-6xl">
          NextGame
        </h1>

        <nav className="mt-6 flex flex-wrap justify-center items-center gap-6 text-neutral-500 text-sm font-semibold ">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/categories/allposts" className="hover:text-black">Category</Link>
          <Link href="/authors/about" className="hover:text-black">About</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </nav>

        <Image
          src="/assets/images/header_image.jpg"
          width={1000}
          height={400}
          alt="header_image"
          className="object-fit mx-auto py-4 h-[400px]"
        />
        </div>
    </header>
  );
}

export default Header;
