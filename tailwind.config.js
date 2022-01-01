// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#ffbc3b',
      background: '#300A24',
    },
  },
  plugins: [],
};
