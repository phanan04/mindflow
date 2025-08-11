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
      className="w-full py-2 px-4 bg-black text-white dark:bg-zinc-800 dark:text-white gap-2"
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
            <Link href="/" className="hover:text-blue-500 dark:hover:text-white">
              Home
            </Link>
            <Link
              href="/categories/all-posts"
              className="hover:text-blue-500 dark:hover:text-white"
            >
              Category
            </Link>
            <Link
              href="/authors/about"
              className="hover:text-blue-500 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-500 dark:hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <h1 className="font-serif font-bold text-4xl hover:text-blue-500 text-white dark:text-white">
              NextGame
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex justify-end items-center gap-2 text-lg text-neutral-600 hover:text-blue-700 dark:text-neutral-300 w-1/3">
          <ThemeToggle />
          <SearchButton />
        </div>
      </div>

      {/* MenuModal */}
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
