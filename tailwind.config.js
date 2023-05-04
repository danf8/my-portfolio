/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
    },
  },
  plugins: [],
}
