module.exports = {
  purge: {
    mode: 'all',
    content: ['./**/*.html'],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {
      border: ['first'],
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
