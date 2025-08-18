"use client";

import SearchButton from "@/app/search/SearchButton";
import { X, Home, BookOpen, Users, Mail } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme/ThemeToggle";

export default function MenuModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <div className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-800 z-50 shadow-2xl transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h2 className="font-bold text-lg text-gray-800 dark:text-gray-200">MindFlow</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Gaming Community</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            aria-label="Đóng menu"
          >
            <X size={20} className="text-gray-600 dark:text-gray-400"/>
          </button> 
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-6 space-y-2">
          <Link 
            href="/" 
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 group"
          >
            <Home size={20} className="text-purple-500 group-hover:text-purple-600" />
            <span className="font-medium">Home</span>
          </Link>
          
          <Link 
            href="/categories/all-posts" 
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
          >
            <BookOpen size={20} className="text-blue-500 group-hover:text-blue-600" />
            <span className="font-medium">Articles</span>
          </Link>
          
          <Link 
            href="/authors" 
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200 group"
          >
            <Users size={20} className="text-green-500 group-hover:text-green-600" />
            <span className="font-medium">About</span>
          </Link>
          
          <Link 
            href="/contact" 
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-200 group"
          >
            <Mail size={20} className="text-orange-500 group-hover:text-orange-600" />
            <span className="font-medium">Contact</span>
          </Link>
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Quick Actions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <SearchButton />
            </div>
            <div className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
