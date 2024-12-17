/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75em',
        sm: '0.875em',
        base: '1em',
        lg: '1.125em',
        xl: '1.25em',
        '2xl': '1.5em',
        '3xl': '1.875em',
        '4xl': '2.25em',
        '5xl': '3em',
        '6xl': '3.75em',
        '7xl': '4.5em',
        '8xl': '6em',
        '9xl': '8em',
      },
      fontFamily: {
        Creepster: ['Creepster', 'cursive'],
      },
    },
  },
  plugins: [],
};
