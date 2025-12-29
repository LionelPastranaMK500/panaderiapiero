/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bakery: {
          flour: "#F9F7F2", // Crema/Harina
          wood: "#2D241E", // Madera profunda
          "wood-dark": "#1A1512",
          gold: "#C5A059", // Acento elegante
          crust: "#8B5E34", // Tono pan horneado
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Maven Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
