"use client";

import SearchButton from "@/app/search/SearchButton";
import { X } from "lucide-react";
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
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <div
        className="absolute top-0 left-0 h-screen w-1/2 bg-white z-50 dark:bg-zinc-900 dark:text-white"
      >
        <div className="flex justify-start p-4 text-black dark:bg-bg-zinc-900 dark:text-white">
          <button onClick={onClose} aria-label="Đóng menu">
            <X size={20}/>
          </button> 
        </div>

        <nav className="flex flex-col gap-4 px-4 text-black dark:bg-zinc-900 dark:text-white">
          <Link href="/" className="text-base hover:text-blue-600 ">Home</Link>
          <Link href="/categories/all-posts" className="text-base hover:text-blue-600">Category</Link>
          <Link href="/authors" className="text-base hover:text-blue-600">Authors</Link>
          <Link href="/contact" className="text-base hover:text-blue-600">Contact</Link>
          <SearchButton />
          <ThemeToggle />
        </nav>
      </div>
    </>
  );
}
