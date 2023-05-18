/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        'large': '898px',
        '62': '15.5rem',
        '92': '23.4375rem',
        'mobile-pic': '10.6787rem',
        '82': '20.5rem',
        '83': '20.6875rem',
        '128': '37.5rem',
        '78': '19.5rem',
        '33': '7.8125rem',
        '224': '56.125rem',
        '360': '90rem',
        'm-pic': '331px',
      },
      height: {
        '15': '3.75rem',
        '25': '6.5rem',
        'mobile': '32.25rem',
        'mobile-pic': '10.6787rem',
        '57': '14.5rem',
        '61': '15.125rem',
        '117': '32.25rem',
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
      },
      margin: {
        'zero-auto': '0 auto',
        '23': '5.75rem',
      },
      padding:{
        '30': '7.50rem',
      },
    },
  },
  plugins: [],
}
