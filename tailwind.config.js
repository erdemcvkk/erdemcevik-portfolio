/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F8", // Açık gri/beyaz arkaplan
        primary: "#0A0A0A",    // Siyah ana metin
        accent: "#FF5500",     // Turuncu vurgu rengi
        secondary: "#555555",  // Koyu gri alt metinler
        extra: "#000000"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
