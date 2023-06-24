/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#397367',
        secondary: '#5DA399',
        accent: 'rgba(235, 235, 235, 0.33)',
      },
      backgroundColor: {
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
