/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./wedding/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'raleway-dots': ['"Raleway Dots"', 'cursive'],
        'zen-maru': ['"Zen Maru Gothic"', 'sans-serif']
      },
      aspectRatio: {
        '3/2': '3 / 2',
      }
    },
  },
  plugins: [],
}