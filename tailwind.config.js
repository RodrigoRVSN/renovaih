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
      xxlg: '64px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: '#F5F8FA',
      text: '#000000',
      text_contrast: '#edf2f4',
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
