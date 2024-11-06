/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      purpol: '#A729F5',
      darkNavy: '#313E51',
      navy: '#3B4D66',
      greyNavy: '#626C7F',
      lightBluish: '#ABC1E1',
      lightGrey: '#F4F6FA',
      white: '#ffffff',
      green: '#26D782',
      red: '#EE5454'
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: []
}
