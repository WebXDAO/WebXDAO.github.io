module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        ubuntoMono: ["Ubuntu Mono", "monospace"],
      },
    },
  },
  plugins: ["@tailwindcss/typography"],
};
