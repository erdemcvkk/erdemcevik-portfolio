/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A", // Siyah arkaplan
        primary: "#FDFBF7",    // Off-White metin
        accent: "#FF5A1F",     // Nike Turuncusu CTA
        secondary: "#2E2E2E",  // Beton Grisi destekleyici
        extra: "#111111"       // Biraz daha açık siyah kartlar
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
