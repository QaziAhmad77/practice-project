/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '800px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        xll: '1400px',
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      fontFamily: {
        bodyFont: ['Poppins', 'sans-serif'],
        titleFont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        bodyColor: '#212428',
        lightText: '#c4cfde',
        boxBg: 'linear-gradient(145deg,#1e2024,#23272b',
        designColor: '#ff014f',
      },
      boxShadow: {
        shadowOne: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      },
    },
  },
};
