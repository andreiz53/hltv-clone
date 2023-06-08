/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-50': "#000814",
        'primary-100': "#000022",
        'primary-200': "#001242",
        'primary-300': "#0077b6",
        'primary-400': "#0096c7",
        'primary-500': "#00b4d8",
        'primary-600': "#48cae4",
        'primary-700': "#90e0ef",
        'primary-800': "#ade8f4",
        'primary-900': "#caf0f8",
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}