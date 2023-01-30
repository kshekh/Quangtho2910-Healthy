
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
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
        sans: [
          '"Zen Kaku Gothic Antique"',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    },
    colors: {
      currentprimary: '#FF963C',
      primary: '#FFCC21',
      'primary-2': '#EA6C00',
      'secondary': '#8FE9D0',
      'dark': '#2E2E2E',
      'dark-2': '#414141',
      'gray': '#777777',
      'light': '#ffffff',

    },
    boxShadow: {
      '1': '6px 0px 3px rgba(0, 0, 0, 0.1608)'
    },
    backgroundImage: {
      'gradiant-1': 'linear-gradient(to right, #FFCC21 0%, #FF963C 100%)',
    },

  },
  plugins: [],
}