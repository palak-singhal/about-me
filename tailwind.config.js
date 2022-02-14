const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      lightBlue: colors.blue,
      blue: colors.blue,
      gray: colors.gray,
      blueGray: colors.gray,
      white: colors.white,
      pink: colors.pink,
    },
  },
};
