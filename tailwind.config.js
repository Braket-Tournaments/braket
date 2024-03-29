/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bracketParallax: "url(../public/images/download.png)",
      },
      spacing: {
        r0: "0rem",
        "r0.125": "0.125rem",
        "r0.25": "0.25rem",
        "r0.375": "0.375rem",
        "r0.5": "0.5rem",
        "r0.625": "0.625rem",
        "r0.75": "0.75rem",
        "r0.875": "0.875rem",
        r1: "1rem",
        "r1.25": "1.25rem",
        "r1.5": "1.5rem",
        "r1.75": "1.75rem",
        r2: "2rem",
        "r2.25": "2.25rem",
        "r2.5": "2.5rem",
        "r2.75": "2.75rem",
        r3: "3rem",
        "r3.5": "3.5rem",
        r4: "4rem",
        r5: "5rem",
        r6: "6rem",
        r7: "7rem",
        r8: "8rem",
        r9: "9rem",
        r10: "10rem",
        r11: "11rem",
        r12: "12rem",
        r13: "13rem",
        r14: "14rem",
        r15: "15rem",
        r16: "16rem",
        r17: "17rem",
        r18: "18rem",
        r19: "19rem",
        r20: "20rem",
        r21: "21rem",
        r22: "22rem",
        r23: "23rem",
        r24: "24rem",
        r25: "25rem",
      },
      colors: {
        white: "#ffffff",
        "main-red": "#904E55",
        "secondary-red": "#905A60",
        "main-background": "#252627",
        "secondary-background": "#F1F1F1",
        "log-in-button": "#B87A82",
        "sign-up-button": "#4E8098",
        grey: "#D9D9D9",
        "log-in-grey": "#CECECE",
        "sign-up-off-white": "#F1FAEE",
        "sign-up-background": "#1D3557",
        "sign-up-accent": "#4E8098",
      },
      dropShadow: {
        arrowsvg: "0rem 0.4rem 0.4rem rgb(0 0 0 / 0.4)",
      },
      width: {
        "5%": "5%",
        "80%/3": "calc(80% / 3)",
      },
      keyframes: {
        "color-slide": {
          from: { transform: "translateX(-101%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      animation: {
        "color-slide": "color-slide .3s ease-in 1",
      },
      fontFamily: {
        sans: ["HinaMincho", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
