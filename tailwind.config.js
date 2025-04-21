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
        dark: {
          900: '#111827',
          950: '#0a0f1c',
        },
        primary: {
          500: '#0d9488',
          600: '#0c8377',
        },
        brand: {
          blue: '#00a0e3',
          indigo: '#393185',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};