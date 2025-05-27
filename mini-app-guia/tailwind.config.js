/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#f1f1ec',
        sky: '#d7e3f3',
        gray: '#a8a39d',
        beige: '#dbc5b0',
        periwinkle: '#7a89c2',
        navy: '#2b304d',
      },
      fontFamily: {
        tipography: ['Poppins', 'sans-serif'],
      },
    },
  },  
  plugins: [],
}

