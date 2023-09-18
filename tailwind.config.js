/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        veryDarkBlue_main: "hsl(217, 54%, 11%)",
        veryDarkBlue_card: "hsl(216, 50%, 16%)",
        veryDarkBlue_line: "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        outift: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
