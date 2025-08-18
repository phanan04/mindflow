"use client";

import SearchButton from "@/app/search/SearchButton";
import Link from "next/link";
import { ThemeToggle } from "./theme/ThemeToggle";
import MenuModal from "./MenuModal";
import { useState } from "react";
import { BookOpen, Home, Mail, Menu, Users } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="w-full py-3 px-4 bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-800 dark:text-white border-b border-gray-200 dark:border-zinc-700 shadow-lg relative"
      role="banner"
    >
      <div className="mx-auto flex items-center justify-between relative">
        {/* Navigation Menu */}
        <div className="flex items-center justify-start gap-6 text-sm font-semibold text-gray-700 dark:text-neutral-300 w-1/3">
          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            aria-label="Mở menu"
          >
            <Menu size={24} />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <Home size={18} className="text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors" />
              <span className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">Home</span>
            </Link>
            <Link
              href="/categories/all-posts"
              className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen size={18} className="text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">Articles</span>
            </Link>
            <Link
              href="/authors"
              className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <Users size={18} className="text-green-500 dark:text-green-400 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors" />
              <span className="group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors">About</span>
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={18} className="text-orange-500 dark:text-orange-400 group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors" />
              <span className="group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors">Contact</span>
            </Link>
          </nav>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="group">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300 whitespace-nowrap">
              🎮 GameFlow
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex justify-end items-center gap-3 text-lg text-gray-600 dark:text-neutral-300 w-1/3">
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
