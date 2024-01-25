/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        green: "hsl(75, 94%, 57%)",
        grey: "hsl(0, 0%, 20%)",
        darkgrey: " hsl(0, 0%, 12%)",
        offblack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
