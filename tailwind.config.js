/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Bricolage Grotesque"', 'sans-serif'],
        'dmsans': ['"DM Sans"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'secondary': ['"Outfit"', 'sans-serif'],
        'rubik': ['"Rubik"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#22c1ad",
          "secondary": "#d72050",
          "accent": "#706f6f",
          "neutral": "#f3f3f3",
          "base-100": "#ffffff",
          "base-200": "#f3f3f3",
          "base-300": "#2cceba",
          "info": "#436255",
          "success": "#23d05f",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
  },
}