"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "./Components/Searchbar";
import BlogList from "./Components/BlogList";
import NewsletterForm from "./Components/NewsletterForm";

const Dashboard = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <nav className="bg-white dark:bg-gray-900 shadow-md py-3 w-full flex justify-center items-center transition-colors">
        <div className="max-w-6xl w-full flex justify-between items-center">
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
            <span className="text-xl text-gray-800 dark:text-white">
              Meta
              <span className="text-black dark:text-gray-300 font-bold">
                Blog
              </span>
            </span>
          </div>

          {/* Menü */}
          <ul className="flex items-center justify-center mr-12 space-x-8 text-gray-700 dark:text-gray-300">
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

          {/* Sağ Taraf (Arama Çubuğu & Tema Butonu) */}
          <div className="flex items-center space-x-14">
            {/* Arama Çubuğu */}
            <SearchBar />

            {/* Tema Değiştirici Buton */}
            <button
              onClick={() =>
                setTheme(
                  theme === "dark" || systemTheme === "dark" ? "light" : "dark"
                )
              }
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md transition"
            >
              {theme === "dark" || systemTheme === "dark" ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      </nav>
      {/* Diğer sayfa içeriği */}
      <main className="max-w-4xl mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          The Impact of Technology on the Workplace:
        </h1>
        <BlogList />
        <Image
          src="/blog-image.png"
          alt="Blog Image"
          width={800}
          height={450}
          className="rounded-lg mt-5"
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-20 mt-10 w-full flex justify-center">
        <div className="mx-auto flex flex-col md:flex-row justify-between px-5">
          <div className="mb-6 md:mb-0 mx-12">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              About
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              <span className="block">
                A blog platform for developers and designers who want to share
                their knowledge with others.
              </span>
              <span className="block mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span className="block mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </p>
          </div>
          <div className="mb-6 md:mb-0 mx-12">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Archived
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Author
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0 mx-12">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              Category
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Lifestyle
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Travel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Economy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Sports
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-12 flex">
            <NewsletterForm />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
