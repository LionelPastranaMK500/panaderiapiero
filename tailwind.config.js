/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Importante: 'class' permite que Zustand active el modo oscuro manualmente
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bakery: {
          flour: "#F9F7F2", // Fondo Claro
          wood: "#2D241E", // Fondo Oscuro / Texto Claro
          "wood-dark": "#1A1512",
          gold: "#C5A059", // Dorado
          crust: "#8B5E34",
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
