/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FF5A1F", // Nike Turuncusu
        primary: "#0A0A0A",    // Siyah ana metin
        accent: "#F5F5F5",     // Kırık Beyaz vurgu
        secondary: "#000000",  // Tam siyah ekstra vurgular
        extra: "#FFFFFF"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
