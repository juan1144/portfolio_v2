/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './templates/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        light: {
          background: '#ffffff',
          backgroundOverlay: '#ffffffE6',
          primary: '#000000',
          secondary: '#0C111D',
          border: '#27272a',
          accent: '#14b8a6',
        },
        dark: {
          background: '#191919',
          backgroundOverlay: '#2a2a2acc',
          primary: '#ffffff',
          secondary: '#fbfbff',
          border: '#27272a',
          accent: '#14b8a6',
        },
      },
      backgroundImage: {
        'texture': "url('../icons/texture.svg')",
        'texture-2': "url('../icons/texture-2.svg')"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
