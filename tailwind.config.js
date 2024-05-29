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
        raleway:['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [],
}