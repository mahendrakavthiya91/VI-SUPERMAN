/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EBF2FE',
          100: '#C7E0FC',
          200: '#A3CEF9',
          300: '#7FBCF7',
          400: '#5BA9F4',
          500: '#3B82F6',
          600: '#1E6ED8',
          700: '#1861B8',
          800: '#125499',
          900: '#0C4780'
        }
      }
    }
  },
  plugins: []
}