/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Balsamiq: ["Balsamiq Sans", "sans-serif"],
        Lexend: ["Lexend", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "14px",
          xl: "12px",
          lg: "16px",
          md: "22px",
          sm: "22px",
        },
        center: true,
        screens: {
          lg: "1016px",
          xl: "1164px",
        },
      },
      colors: {
        purple: "#15111F",
        purpleBlue: "#5928E5",
      },
      boxShadow: {
        "custom-xl": "0px 4px 16.5px 0px #5928E5",
        "custom-2xl": "0px 4px 18px -3px #48369c",
      },
      backgroundSize: {
        "100%": "100% 135%",
      },
      backgroundImage: {
        headerBg: `url("./assets/img/webp/layer-bg.webp")`,
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
