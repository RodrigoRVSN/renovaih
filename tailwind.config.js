module.exports = {
  purge: ['./src/pages/*', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      xxs: '4px',
      xs: '8px',
      md: '16px',
      xmd: '24px',
      lg: '32px',
      xlg: '40px',
      xxlg: '64px',
      xxxlg: '96px',
      card_image: '250px',
      card_h: '450px',
      card_w: '300px'
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
      start_button: '#7EC289',
      text: '#000000',
      text_contrast: '#FFFFFF'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
