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
      },
    },
  },
  plugins: ['@tailwindcss/forms', '@tailwindcss/typography'],
};
