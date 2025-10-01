/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onpeBlue: "#002f6c", // azul corporativo
        onpeRed: "#e30613",  // rojo ONPE
        onpeGray: "#f4f4f4", // gris de fondo
      }
    },
  },
  plugins: [],
}
