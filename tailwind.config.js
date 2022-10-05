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
        graph: {
          "0%": { bottom: 0 },
          "100%": { bottom: 100 },
        },
        line: {
          "0%": { width: 0 },
          "100%": { width: "140px" },
        },
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out both",
        graph: "graph 1s both",
        line: "line 0.4s both",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  important: true,
};
