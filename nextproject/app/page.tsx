"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "./Components/Searchbar";

const Dashboard = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration hatasını önlemek için
  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center transition-colors">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          className="Logoimg"
          src="/60736.png"
          alt="logo"
          width={180}
          height={38}
          priority
        />
        <span className="font-bold text-xl text-gray-800 dark:text-white">
          Meta<span className="text-black dark:text-gray-300">Blog</span>
        </span>
      </div>

      {/* Menü */}
      <ul className="hidden md:flex space-x-12 text-gray-700 dark:text-gray-300">
        <li>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Single Post
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Pages
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex items-center space-x-20">
        {/* Arama Çubuğu */}
        <SearchBar />

        {/* Tema Değiştirici Buton */}
        <button
          onClick={() =>
            setTheme(
              theme === "dark" || systemTheme === "dark" ? "light" : "dark"
            )
          }
          className="ml-4 w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full shadow-md transition"
        >
          {theme === "dark" || systemTheme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Dashboard;
