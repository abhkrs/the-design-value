/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: 'var(--font-inter)',
      dmsans: 'var(--font-dmsans)',
    },
    extend: {
      colors: {
        primary: '#397367',
        secondary: '#5DA399',
        accent: '#f2fafb',
        gold: '#E59819'
      },
      backgroundColor: {
        white: '#fff',
        light: '#f2fafb',
      },
    },
  },
  plugins: [],
};
