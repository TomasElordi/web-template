/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
      './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
      extend: {
          backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              'gradient-conic':
                  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          },
      },
      screens: {
          sm: '500px',
          md: '768px',
          lg: '1100px',
          xl: '1400px',
      },
  },
  plugins: [],
};