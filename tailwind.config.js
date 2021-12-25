module.exports = {
  purge: ['./src/pages/*', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      text: '#edf2f4',
      primary: {
        100: '#4cc9f0',
        200: '#4895ef',
        300: '#4361ee'
      },
      secondary: '#b5179e'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
