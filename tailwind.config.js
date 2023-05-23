const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#373737",
        "dark-orange-labeddit": "#FE7E02",
        "light-orange-labeddit": "#F9B24E",
        "dark-blue-gray": "#45525B",
        "light-blue-gray": "#A8BBC6",
        "gradient-pink": "#FF6489",
        "lighter-gray": "#EDEDED",
        "light-gray": "#C4C4C4",
        "blue-button": "#4088CB",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "Noto Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
