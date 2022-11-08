/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'red-1': '#C31541',
      'red-2': '#C10B39',
      'red-3': '#D04C6D',
      'blue-1': '#18425A',
      'blue-2': '#1D465B',
      'blue-3': '#244A5D',
      'paragraph-color': '#5F6060',
      'white': '#FFFFFF',
      'black': '#00000'
    },
  },
  plugins: [require("daisyui")],
}