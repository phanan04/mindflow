"use client";

import { X } from "lucide-react";
import clsx from "clsx";

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
          <a href="/" className="text-base hover:text-blue-600 ">Trang chủ</a>
          <a href="/categories/allposts" className="text-base hover:text-blue-600">Danh mục</a>
          <a href="/authors/about" className="text-base hover:text-blue-600">Tác giả</a>
          <a href="/contact" className="text-base hover:text-blue-600">Liên hệ</a>
        </nav>
      </div>
    </>
  );
}
