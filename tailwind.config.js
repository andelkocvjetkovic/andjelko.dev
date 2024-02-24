const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: '100%',
          md: '65ch',
          lg: '65ch',
          xl: '70ch',
          '2xl': '80ch',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
      colors: {
        primary: '#FAE500'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

