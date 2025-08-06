"use client";

import { X } from "lucide-react";
import Link from "next/link";

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
        className="fixed top-0 right-0 h-full w-[150px] bg-white z-50 dark:bg-zinc-900 dark:text-white"
      >
        <div className="flex justify-end p-4 dark:bg-bg-zinc-900 dark:text-white">
          <button onClick={onClose} aria-label="Đóng menu">
            <X size={24} />
          </button> 
        </div>

        <nav className="flex flex-col gap-4 px-6 dark:bg-zinc-900 dark:text-white">
          <Link href="/" className="text-base hover:text-blue-600 ">Home</Link>
          <Link href="/categories/all-posts" className="text-base hover:text-blue-600">Category</Link>
          <Link href="/authors/phan-an" className="text-base hover:text-blue-600">Author</Link>
          <Link href="/contact" className="text-base hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </>
  );
}
