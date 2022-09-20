/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {},
    colors: {
      primary: {
        light: "rgb(245, 148, 148)",
        default: "rgb(255, 81, 81)",
        dark: "rgb(248, 47, 47)",
      },
      "gray-default": "rgb(244, 245, 246)",
      "gray-light": "rgb(65, 81, 97)",
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
    },
  },
  plugins: [],
};
