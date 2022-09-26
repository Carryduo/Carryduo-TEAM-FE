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
      keyframes: {
        wiggle: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  important: true,
};
