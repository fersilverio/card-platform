/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        'roboto': ['Roboto','sans-serif'],
        'briem-hand': ['Briem-Hand', 'cursive'],
        'roboto-condensed': ['Roboto Condensed", sans-serif'],
        'sedan': ["Sedan SC", 'serif'],
        'montserrat': ['"Montserrat", sans-serif'],
        'fira': ['Fira Sans', 'sans-serif'],
        'carrois-gothic': [ "Carrois Gothic", 'sans-serif'],
      },
      colors: {
        'git-gray-900': '#0e0e1a',
        'git-gray-700': '#1a1a29'
      }
    },
  },
  plugins: [],
}
