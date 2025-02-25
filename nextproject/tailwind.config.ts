/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Dark mode'un class ile değişmesini sağla
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#FFFAFA",
      },
    },
  },
  variants: {},
  plugins: [],
};
