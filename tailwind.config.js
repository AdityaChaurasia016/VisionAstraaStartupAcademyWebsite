/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ubuntu:['Ubuntu', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        inter:['Inter', 'sans-serif'],
        raleway:['Raleway', 'sans-serif'],
        Khula:['Khula', 'sans-serif']
      },
      transitionDuration:{'1000':'1000ms'

      },
    },
  },
  variants: {
    extend: {
      transitionDuration: ['hover'],
    },
  },
  plugins: [],
}