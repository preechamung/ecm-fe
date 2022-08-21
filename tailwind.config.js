/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      brand: "#FDBA74",
      dark: "#27272A",
      mid: "#FED7AA",
      light: "#F8FAFC"
    },
  },
  plugins: [],
};
