"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme/ThemeToggle";
import { useState, memo, lazy, Suspense } from "react";
import { BookOpen, Home, Mail, Menu, Users } from "lucide-react";

const SearchButton = lazy(() => import("@/app/search/SearchButton"));
const MenuModal = lazy(() => import("./MenuModal"));

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="w-full py-4 px-4 bg-white dark:bg-black text-zinc-800 dark:text-white border-b border-zinc-200 dark:border-zinc-700 shadow-sm"
      role="banner"
    >
      <div className="mx-auto flex items-center justify-between relative">
        {/* Navigation Menu */}
        <div className="flex items-center justify-start gap-8 text-sm font-medium text-zinc-700 dark:text-zinc-300 w-1/3">
          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
            aria-label="Mở menu điều hướng"
          >
            <Menu size={20} />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            >
              <Home size={16} />
              <span>Trang Chủ</span>
            </Link>
            <Link
              href="/categories/all-posts"
              className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            >
              <BookOpen size={16} />
              <span>Bài Viết</span>
            </Link>
            <Link
              href="/authors"
              className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            >
              <Users size={16} />
              <span>Giới Thiệu</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            >
              <Mail size={16} />
              <span>Liên Hệ</span>
            </Link>
          </nav>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="group">
            <h1 className="font-bold text-2xl md:text-3xl text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-200 whitespace-nowrap">
              GameFlow
            </h1>
          </Link>
        </div>

        <div className="hidden lg:flex justify-end items-center gap-4 w-1/3">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div>
              <Suspense fallback={<div className="w-8 h-8 bg-zinc-200 dark:bg-slate-700 rounded animate-pulse" />}>
                <SearchButton />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <Suspense fallback={null}>
          <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </Suspense>
      )}
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
