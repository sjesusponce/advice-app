/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      'xs': '1.5rem',
      'sm': '1.625rem',
      'tiny': '1.625rem',
      'base': '1.75rem',
      'lg': '1.875rem',
      'xl': '1.375rem',
      '2xl': '1.625rem',
      '3xl': '2rem',
      '4xl': '2.375rem',
      '5xl': '3.125rem',
      '6xl': '4.125rem',
      '7xl': '5.125rem',
    },
    extend: {
      colors:{
        'adv-light-cyan':'#CEE3E9',
        'adv-neon-green':'#52FFA8',
        'adv-blue-gray':'#4E5D73',
        'adv-dark-gray':'#323A49',
        'adv-dark-blue':'#1F2632'
      },
      fontFamily:{
        'manrope': ['"Manrope"']
      },
      screens:{
        'mobile': '375px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}
