/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      ss: "375px",
      ssm: "414px",
      sm: "542px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    backgroundPosition: {
      "right-4": "right 15%",
      "bottom-4": "bottom 4%",
    },
  },
  plugins: [],
};
