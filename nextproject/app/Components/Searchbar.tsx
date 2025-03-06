"use client";

import { useState } from "react";
import { Search } from "lucide-react"; // Lucide ikonları için

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 max-width-[166] h-9  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#F4F4F5] dark:bg-[#242535] dark:text-white"
      />
      <button className="absolute right-2 top-2 text-gray-500 dark:text-gray-300">
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
