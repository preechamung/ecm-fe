/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#F8E197',
      'primary-50': '#F99052',
      'primary-100': '#9F6B4E',
      'primary-200': '#54433A',
    }
  },
  plugins: [],
};
