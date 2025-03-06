import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" || systemTheme === "dark" ? "light" : "dark")
      }
      className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-900 transition"
    >
      {theme === "dark" ? (
        <Image src="/darkSwitch.png" alt="Dark Mode" width={48} height={28} />
      ) : (
        <Image src="/Switch.png" alt="Light Mode" width={48} height={28} />
      )}
    </button>
  );
};

export default DarkModeSwitch;
