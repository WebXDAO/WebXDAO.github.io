const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './context/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'cyber-webx': '#5f074d',
        'hover-webx': '#5f074d',
        gradient1: '#14111D',
        gradient2: '#30122A',
      },
    },
  },
  plugins: ['@tailwindcss/forms', '@tailwindcss/typography'],
};
