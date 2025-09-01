/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Fira Mono', 'monospace'],
      },
      colors: {
        gold: "#FFD700",
      },
    },
  },
  plugins: [],
};
