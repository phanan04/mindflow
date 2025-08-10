"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {useRouter } from "next/navigation";

export default function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!keyword.trim()) return;
    router.push(`/search?query=${keyword.trim()}`)
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center px-6 dark:bg-zinc-900 dark:text-white">
      <button
        onClick={onClose}
        type="button"
        className="absolute top-6 right-6 text-gray-800"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <form onSubmit={handleSubmit} className="w-full max-w-xl text-center dark:bg-zinc-900 dark:text-white">
        <h2 className="text-gray-400 text-2xl md:text-4xl font-light mb-6 ">
          Type and press <strong>Enter</strong> to search
        </h2>
        <input
          type="text"
          autoFocus
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter keywords"
          className="w-full border-b border-gray-300 outline-none text-lg md:text-xl py-2 px-4 bg-transparent"
        />
      </form>
    </div>
  );
}
