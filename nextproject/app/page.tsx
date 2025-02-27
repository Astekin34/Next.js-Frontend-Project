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
      <nav className="bg-white dark:bg-gray-900 py-3 w-full flex justify-center items-center transition-colors">
        <div className="max-w-7xl w-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              className=""
              src="/union.png"
              alt="logo"
              width={36}
              height={36}
              priority
            />
            <span className="text-xl text-[#141624] dark:text-white">
              Meta
              <span className=" dark:text-gray-300 font-bold">Blog</span>
            </span>
          </div>

          {/* Menü */}
          <ul
            className="flex text-xl items-center justify-center mr-12 ml-6 space-x-8 text-[#3B3C4A] dark:text-white"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
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
      <main className=" py-10 px-5">
        <BlogList />
      </main>

      {/* Footer */}
      <footer
        className="bg-gray-100 dark:bg-gray-800 py-20 mt-10 flex flex-col justify-center"
        style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
      >
        <div className=" mx-auto flex flex-col divide-y">
          {" "}
          <div className="flex flex-col md:flex-row justify-between px-5">
            <div className="mb-6 md:mb-0 mx-12">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                About
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                <span className="block">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit,br sed do <br /> eiusmod
                  tempor incididunt ut labore <br /> et dolore magna aliqua. Ut
                  enim ad minim veniam.
                </span>
                <span className="block mt-5">
                  <span className="text-gray-900 dark:text-white font-bold">
                    Email:
                  </span>{" "}
                  info@jstemplate.net
                </span>
                <span className="block">
                  <span className="text-gray-900 dark:text-white font-bold">
                    Phone:
                  </span>{" "}
                  880 123 456 789
                </span>
              </p>
            </div>
            <div className="mb-6 md:mb-0 mx-12">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                Quick Link
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
            <div className="mx-16">
              <NewsletterForm />
            </div>
          </div>
          <div className="w-full flex justify-start items-start mt-16 pt-8 ml-16 ">
            <div className="flex space-x-2">
              <Image
                className="dark:bg-white rounded-3xl width"
                src="/LogoLight.png"
                alt="logo"
                width={48}
                height={48}
                style={{ height: "px" }}
                priority
              />
              <span className="text-2xl text-gray-800 dark:text-white ">
                Meta
                <span className="text-black text-2xl dark:text-white font-bold">
                  Blog
                </span>{" "}
                <span className="mt-2 block text-gray-500 dark:text-gray-500 text-base">
                  <span className="text-gray-500 dark:text-white">
                    © JS Template 2023.
                  </span>{" "}
                  All Rights Reserved.
                </span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
