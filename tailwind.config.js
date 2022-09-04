/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        box: "#202023",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
