const colors = require('tailwindcss/colors')


module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        // primary: "#1A202C",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};