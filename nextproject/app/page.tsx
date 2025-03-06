"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./Components/Searchbar";
import BlogList from "./Components/BlogList";
import NewsletterForm from "./Components/NewsletterForm";
import DarkModeSwitch from "./Components/DarkModeSwitch";

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
    <div className="bg-white dark:bg-[#181a2a] min-h-screen">
      <nav className="bg-white dark:bg-[#181a2a]  py-3 w-full flex justify-center items-center transition-colors">
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
              <Link href="/" className="hover:text-black dark:hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blogpost"
                className="hover:text-black dark:hover:text-white"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/singlepost"
                className="hover:text-black dark:hover:text-white"
              >
                Single Post
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className="hover:text-black dark:hover:text-white"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-black dark:hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Sağ Taraf (Arama Çubuğu & Tema Butonu) */}
          <div className="flex items-center space-x-14">
            {/* Arama Çubuğu */}
            <SearchBar />

            {/* Tema Değiştirici Buton */}
            <DarkModeSwitch />
          </div>
        </div>
      </nav>
      {/* Diğer sayfa içeriği */}
      <main className=" py-10 px-5">
        <BlogList />
      </main>

      {/* Footer */}
      <footer
        className="bg-gray-100 dark:bg-[#141624] py-20 mt-10 flex flex-col justify-center"
        style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
      >
        <div className=" mx-auto flex flex-col divide-y dark:divide-[#242535]">
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
                className="rounded-3xl"
                src={theme === "dark" ? "/LogoDrk.png" : "/LogoLight.png"}
                alt="logo"
                width={48}
                height={48}
                style={{ height: "48px" }}
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
              <div className="flex pl-[500px] items-end divide-x-2 divide-[#E8E8EA] dark:divide-[#242535] text-gray-500 dark:text-white">
                <span className="pr-4">Terms of Use</span>
                <span className="px-4">Privacy Policy</span>
                <span className="pl-4">Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
