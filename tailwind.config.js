/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['index.html', 'Js/index.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        adelia: ["ADELIA", "cursive"],
      },
      screens: {
        'xmd': '860px',
        'lg': '1100px'
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}