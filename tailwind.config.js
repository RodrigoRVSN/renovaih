/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/pages/*', './src/components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['Poppins', ...defaultTheme.fontFamily.mono]
      }
    },

    spacing: {
      xxs: '4px',
      xs: '8px',
      md: '16px',
      xmd: '24px',
      lg: '32px',
      xlg: '40px',
      xxlg: '64px',
      xxxlg: '96px',
      project_image: '150px',
      card_image: '250px',
      card_h: '450px',
      card_w: '300px',
      project_w: '550px',
      ranking_w: '550px',
      card_min_w: '250px'
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: '#F5F8FA',
      blocked: '#AFAFAF',
      button: '#F18F01',
      card: '#7EBDC2',
      primary: '#0075FF',
      ranking: '#B2EDFF',
      secondary: '#b5179e',
      start_button: '#2a9d8f',
      text: '#000300',
      text_contrast: '#FFFFFF',
      dark_contrast: '#2b2d42'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
