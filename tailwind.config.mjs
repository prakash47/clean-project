// tailwind.config.mjs
/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // App Router files
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Components
    './src/styles/**/*.{css}', // CSS files (though prose.css is removed)
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: 'var(--color-dark-900)',
          950: 'var(--color-dark-950)',
        },
        primary: {
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
        },
        brand: {
          blue: 'var(--color-brand-blue)',
          indigo: 'var(--color-brand-indigo)',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;