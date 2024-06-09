/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
        "header-blue": "#C5E5FC",
        "header-darkBlue":"4B5A7E",
    },
    extend:{
      fontFamily: {
        "Outfit-regular":["Outfit","sans-serif"],
      },
    },
    plugins: [],
  }
}
