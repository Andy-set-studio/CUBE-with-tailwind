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
      black: '#000',
      white: '#fff'
    },
    backgroundColor: ({theme}) => theme('colors'),
    textColor: ({theme}) => theme('colors'),
    spacing: {
      test: 'clamp(10px, 50%, 30px)'
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
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
    fontSize: {
      'xs': ['0.75rem', {lineHeight: '1rem'}],
      'sm': ['0.875rem', {lineHeight: '1.25rem'}],
      'base': ['1rem', {lineHeight: '1.5rem'}],
      'lg': ['1.125rem', {lineHeight: '1.75rem'}],
      'xl': ['1.25rem', {lineHeight: '1.75rem'}],
      '2xl': ['1.5rem', {lineHeight: '2rem'}],
      '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
      '4xl': ['2.25rem', {lineHeight: '2.5rem'}],
      '5xl': ['3rem', {lineHeight: '1'}],
      '6xl': ['3.75rem', {lineHeight: '1'}],
      '7xl': ['4.5rem', {lineHeight: '1'}],
      '8xl': ['6rem', {lineHeight: '1'}],
      '9xl': ['8rem', {lineHeight: '1'}]
    },
    fontWeight: {
      normal: '400',
      bold: '700',
      extrabold: '800',
      black: '900'
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
