import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/**/*.tsx",],
  theme: {
    extend: {
      colors: {
        brand: {
          product: {
            100: '#A881E6',
            200: '#7450AC',
            300: '#523480',
          },
          base: {
            100: '#FBF9FE',
            200: '#AFABB6',
            300: '#252529',
            400: '#17171A',
            500: '#111112',
            600: '#0C0C0D',
          },
          feedback: {
            100: '#4E995E',
            200: '#2F723D',
          },
        }
      },
    },
  },
  plugins: [
    plugin(({ addVariant, addComponents }) => {
      addVariant('color-swatch-webkit', '&::-webkit-color-swatch')
      addVariant('color-swatch-moz', '&::-moz-color-swatch')
      addVariant('color-swatch-wrapper-webkit', '&::-webkit-color-swatch-wrapper')
      addComponents({
        '.outline-default': {
          outline: '2px solid transparent',
          outlineOffset: '0px',
          '&:focus': {
            outlineWidth: '2px',
            outlineColor: '#A881E6',
            zIndex: '50',
          }
        }
      })
    })
  ],
}

