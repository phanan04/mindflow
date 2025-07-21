"use client";

import { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";

export default function SearchButton() {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col items-center gap-4">
            {scrolled && (
                <div className="flex flex-col items-center text-center text-gray-500 text-sm">
                    <span>MENU</span>
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="bg-white p-2 rounded-full "
                    >
                        <Menu size={24} />
                    </button>
                    <button className="bg-white p-2 rounded-full mt-2">
                        <Search size={24} />
                    </button>
                </div>
            )}

        </div>
    );
}
