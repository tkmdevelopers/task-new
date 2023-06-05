/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        task_primary: "#360951",
        task_secondary: "#f3c371",
        profile_border: "#130d1b",
        dash_line: "#fbc508",
        dash_line2: "#665e5e",
        button_bg: "#eeaa34",
      },
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand)"],
        satoshi: ["var(--font-satoshi)"],
      },
    },
  },
  plugins: [],
});
