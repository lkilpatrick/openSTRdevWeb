/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f8f6f2',
          100: '#ede9e0',
          200: '#d9d0c0',
          300: '#c0b09a',
          400: '#a89070',
          500: '#8c7050',
          600: '#6e5438',
          700: '#503c28',
          800: '#342618',
          900: '#1a1208',
        },
      },
      maxWidth: {
        prose: '65ch',
        site: '1280px',
      },
    },
  },
  plugins: [],
};
