/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
        zen: ['"Zen Kaku Gothic Antique"', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: {
          300: "#FFCC21",
          400: "#FF963C",
          500: "#EA6C00",
        },
        secondary: {
          300: "#8FE9D0",
        },
        dark: {
          400: "#777777", 
          500: "#414141",
          600: "#2E2E2E",
         
        },
        
      },

      boxShadow: {
        1: "6px 0px 3px rgba(0, 0, 0, 0.1608)",
      },
      backgroundImage: {
        "primary": "linear-gradient(to right, #FFCC21 0%, #FF963C 100%)",
        "primary-2": "linear-gradient(32.95deg, #FF963C 8.75%, #FFCC21 86.64%)",
      },
    },
  },
  plugins: [],
};
module.exports = config;
