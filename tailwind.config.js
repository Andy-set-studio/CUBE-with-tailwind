module.exports = {
  content: ['./src/index.html'],
  presets: [],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      primary: '#ff5400',
      secondary: '#1982c4',
      light: '#f3f3f3',
      dark: '#252525'
    },
    backgroundColor: ({theme}) => theme('colors'),
    textColor: ({theme}) => theme('colors'),
    spacing: {
      'size-0': 'clamp(0.83rem, 0.90rem + -0.32vw, 0.67rem)',
      'base': 'clamp(1.00rem, 1.00rem + 0.00vw, 1.00rem)',
      'size-1': 'clamp(1.20rem, 1.08rem + 0.59vw, 1.50rem)',
      'size-2': 'clamp(1.44rem, 1.12rem + 1.58vw, 2.25rem)',
      'size-3': 'clamp(1.73rem, 1.09rem + 3.21vw, 3.38rem)',
      'size-4': 'clamp(2.07rem, 0.91rem + 5.83vw, 5.06rem)',
      'size-5': 'clamp(2.49rem, 0.50rem + 9.96vw, 7.59rem)'
    },
    fontSize: {
      'size-0': 'clamp(0.83rem, 0.90rem + -0.32vw, 0.67rem)',
      'base': 'clamp(1.00rem, 1.00rem + 0.00vw, 1.00rem)',
      'size-1': 'clamp(1.20rem, 1.08rem + 0.59vw, 1.50rem)',
      'size-2': 'clamp(1.44rem, 1.12rem + 1.58vw, 2.25rem)',
      'size-3': 'clamp(1.73rem, 1.09rem + 3.21vw, 3.38rem)',
      'size-4': 'clamp(2.07rem, 0.91rem + 5.83vw, 5.06rem)',
      'size-5': 'clamp(2.49rem, 0.50rem + 9.96vw, 7.59rem)'
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    gap: ({theme}) => theme('spacing'),
    margin: ({theme}) => ({
      auto: 'auto',
      ...theme('spacing')
    }),
    scrollMargin: ({theme}) => ({
      ...theme('spacing')
    }),
    textColor: ({theme}) => theme('colors'),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50'
    }
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled'
  ],
  plugins: []
};
