/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        surface: "#1e1e1e",
        primary: "#e5e5e5",
        muted: "#a3a3a3",
      },
    },
  },
  plugins: [],
};
