/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    textStrokeWidth: {
      0: '0',
      0.5: '0.5px',
      1: '1px',
      1.5: '1.5px',
      2: '2px',
    },
    extend: {
      fontFamily: {
        body: ['Raleway', 'sans-serif'],
      },
      colors: {
        'off-black': '#1d1d1d',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-stroke': (value) => ({
            '-webkit-text-stroke-color': value,
          }),
        },
        { values: theme('colors') },
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-stroke': (value) => ({
            '-webkit-text-stroke-width': value,
          }),
        },
        { values: theme('textStrokeWidth') },
      );
    }),
  ],
};
