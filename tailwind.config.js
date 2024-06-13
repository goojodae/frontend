/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        NotoSans: ["Noto Sans KR", "sans-serif"],
      },
      height: {
        tooltip: "448px",
      },
      width: {
        tooltip: "257px",
      },
      minHeight: {
        imageLoader: "400px",
      },
      colors: {
        "header-blue": "#C5E5FC",
        darkblue: "#4B5A7E",
        "login-input": "#F5F5F6",
        darkblue2: "#435B76",
        darkblue3:"#80B0FF",
        greenblue: "#BEE7E0",
        yellow: "#FDEAB5",
        gray: "rgba(0,0,0,0.1)",
        darkgray: "#BEBEBE",
      },
    },
    plugins: [],
  },
};
