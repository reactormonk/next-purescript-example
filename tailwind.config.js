const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.js'
  ],
  theme: {
    colors: {
      gray: colors.blueGray,
      teal: colors.teal,
    }
  },
  variants: {},
  plugins: [],
}
