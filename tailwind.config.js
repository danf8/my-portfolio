/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // }, w;205 h14.5
      width: {
        // '95': '375px',
        'large': '898px',
        '62': '15.5rem',
        '92': '23.4375rem',
        'mobile-pic': '10.6787rem',
        '82': '20.5rem',
        '128': '31.625rem',
        '78': '19.5rem'
      },
      height: {
        '15': '3.75rem',
        '25': '6.5rem',
        'mobile': '32.25rem',
        'mobile-pic': '10.6787rem',
        '57': '14.5rem',

      },
      colors:{
        peach: {
          50: '#FCF5EC'
        },
        blueish: {
          50: '#21243D'
        },
      },
      dropShadow: {
        '4xl': [
          '-1rem -1rem rgba(0, 0, 0, 0.55)',
      ]
      },
      fontSize: {
        xsm: '0.60rem',
      },
      maxWidth: {
        mobile: '375px'
      }
    },
  },
  plugins: [],
}
