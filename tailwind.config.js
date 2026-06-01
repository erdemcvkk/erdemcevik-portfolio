/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        primary: "#FFFFFF",
        accent: "#D4AF37",
        secondary: "#888888",
        extra: "#FF5500"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
