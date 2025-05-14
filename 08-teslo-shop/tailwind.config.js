const { animation, keyframes } = require('@angular/animations');
const { default: daisyui } = require('daisyui');
const { default: themes } = require('daisyui/theme/object');

module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3 ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [pastel]
  }
}
