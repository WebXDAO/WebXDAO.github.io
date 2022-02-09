module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#19181C",
      gray: "#7F7D83",
    },
    extend: {
      fontFamily: { poppins: ["Poppins"] },
    },
  },
  plugins: ["@tailwindcss/typography"],
};
