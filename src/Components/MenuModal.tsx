"use client";

import SearchButton from "@/app/search/SearchButton";
import { X, Home, BookOpen, Users, Mail } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme/ThemeToggle";
import { useEffect } from "react";

export default function MenuModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <div className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-zinc-900 z-50 shadow-xl transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg flex items-center justify-center">
              <span className="font-bold text-sm">G</span>
            </div>
            <div>
              <h2 className="font-bold text-lg text-zinc-900 dark:text-white">GameFlow</h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Gaming Blog</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors duration-200"
            aria-label="Đóng menu điều hướng"
          >
            <X size={20} className="text-zinc-600 dark:text-zinc-400"/>
          </button> 
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-6 space-y-2">
          <Link 
            href="/" 
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
          >
            <Home size={20} />
            <span className="font-medium">Trang Chủ</span>
          </Link>
          
          <Link 
            href="/categories/all-posts" 
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
          >
            <BookOpen size={20} />
            <span className="font-medium">Bài Viết</span>
          </Link>
          
          <Link 
            href="/authors" 
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
          >
            <Users size={20} />
            <span className="font-medium">Giới Thiệu</span>
          </Link>
          
          <Link 
            href="/contact" 
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
          >
            <Mail size={20} />
            <span className="font-medium">Liên Hệ</span>
          </Link>
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Quick Actions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <SearchButton onSearchDone={onClose} />
            </div>
            <div className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
