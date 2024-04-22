/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'abhaya': ['Abhaya Libre', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#00299B',
      },
    },
  },
  plugins: [],
}

