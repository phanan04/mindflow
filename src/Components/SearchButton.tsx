"use client";

import { useState, useEffect } from "react";
import { Menu, Search, X } from "lucide-react";
import SearchOverlay from "./SearchOverplay"; 
import MenuModal from "./MenuModal";

export default function SearchButton() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Search button always at top */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setOpenSearch(true)}
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Menu that appears when scrolled */}
      {scrolled && (
        <div className="fixed top-16 right-4 z-50">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 font-medium"></span>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              {showMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            {/* Menu items */}
            {showMenu && (
              <MenuModal isOpen={showMenu} onClose={() => setShowMenu(false)} />
            )}
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchOverlay isOpen={openSearch} onClose={() => setOpenSearch(false)} />
    </>
  );
}
