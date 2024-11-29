/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets", "./css"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        xl: "1440px"
      },
      backgroundImage: {
        "hero-mobile": "url('../assets/images/background-pattern-mobile.svg')",
        "hero-desktop": "url('../assets/images/background-pattern-desktop.svg')"
      },
      textUnderlineOffset: {
        8: '8px',
      }
    },
    container: {
      center: true,
    },
    colors: {
      green: "#44FFA1",
      purple: {
        light: "#FCF8FF",
        dark: "#24053E",
        default: "#584D62"
      },
      white: "#FFFFFF"
    },
    fontFamily:{
      manrope: ["Manrope", "serif"],
      fraunces: ["Fraunces", "serif"],
    },
    fontWeight: {
      bold: 400,
      extrabold: 700,
      default: 400
    }

  },
  plugins: [],
}