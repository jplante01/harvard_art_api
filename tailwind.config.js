/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '80px 1fr auto',
      },
      colors: {
        theme: {
          50: '#f5eaea',
          100: '#ead5d5',
          200: '#d5abab',
          300: '#c08282',
          400: '#ab5858',
          500: '#962e2e',
          600: '#782525',
          700: '#5a1c1c',
          800: '#3c1212',
          900: '#1e0909',
        },
      },
    },
  },
};
