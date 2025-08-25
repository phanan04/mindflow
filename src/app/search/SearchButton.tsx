"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchButton({
  onSearchDone,
}: {
  onSearchDone?: () => void;
}) {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    router.push(`/search?query=${searchValue.trim()}`);
    setSearchValue("");
    if (onSearchDone) onSearchDone();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e as any);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white dark:bg-zinc-300 rounded-xl overflow-hidden shadow-sm max-w-sm hover:bg-zinc-300 dark:hover:bg-white transition duration-300"
      >
        <button
          aria-label="Tìm kiếm"
          type="submit"
          className="p-1.5 text-zinc-600 dark:text-black hover:text-zinc-800 transition-colors"
        >
          <Search size={16} />
        </button>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleInputKeyDown}
          className="flex-1 p-1.5 bg-transparent text-black dark:text-black outline-none text-sm"
        />
      </form>
    </>
  );
}
