"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import SearchModal from "./SearchModal";

export default function SearchButton() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenSearch(true)}
        className="bg-white p-3 transition-shadow dark:bg-zinc-900 dark:text-white"
      >
        <Search size={20} />
      </button>
     
      {/* Search Modal */}
      <SearchModal isOpen={openSearch} onClose={() => setOpenSearch(false)} />
    </>
  );
}
