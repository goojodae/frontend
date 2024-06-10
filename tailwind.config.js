/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
        "header-blue": "#C5E5FC",
        "darkblue":"#4B5A7E",
        "login-input":"#F5F5F6",
        "darkblue2":"#435B76",
        "greenblue":"#BEE7E0",
        "yellow":"#FDEAB5"
    },
    extend:{
      fontFamily: {
        "Outfit":["Outfit","sans-serif"],
      },
    },
    plugins: [],
  }
}
