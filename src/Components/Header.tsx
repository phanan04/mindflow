"use client";

import SearchButton from "@/app/search/SearchButton";
import Link from "next/link";
import { ThemeToggle } from "./theme/ThemeToggle";
import MenuModal from "./MenuModal";
import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="w-full py-3 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 dark:text-white shadow-lg relative"
      role="banner"
    >
      <div className="mx-auto flex items-center justify-between relative">
        {/*  Menu */}
        <div className="flex items-center justify-start gap-6 text-sm font-semibold text-white dark:text-neutral-300 w-1/3">
          {/* hamburger button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 hover:bg-gray-700 rounded"
            aria-label="Mở menu"
          >
            <Menu size={24} />
          </button>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 hover:text-purple-400 dark:hover:text-purple-400 transition-colors duration-300">
              🏠 <span>Home</span>
            </Link>
            <Link
              href="/categories/all-posts"
              className="flex items-center gap-2 hover:text-purple-400 dark:hover:text-purple-400 transition-colors duration-300"
            >
              📚 <span>Articles</span>
            </Link>
            <Link
              href="/authors"
              className="flex items-center gap-2 hover:text-purple-400 dark:hover:text-purple-400 transition-colors duration-300"
            >
              👥 <span>Authors</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:text-purple-400 dark:hover:text-purple-400 transition-colors duration-300"
            >
              📧 <span>Contact</span>
            </Link>
          </nav>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="group">
            <h1 className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
              🎮 GameFlow
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex justify-end items-center gap-3 text-lg text-neutral-300 w-1/3">
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="transform hover:scale-110 transition-transform duration-300">
              <SearchButton />
            </div>
          </div>
        </div>
      </div>

      {/* MenuModal */}
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
