/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
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
      red: '#EE5454',
      bgHtml: '#FFF1E9',
      bgCss: '#E0FDEF',
      bgJs: '#EBF0FF',
      bgAccessibility: '#F6E7FF'
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },
      backgroundImage: {
        desktopLight: "url('/src/assets/images/pattern-background-desktop-light.svg')",
        tabletLight: "url('/src/assets/images/pattern-background-tablet-light.svg')",
        mobileLight: "url('/src/assets/images/pattern-background-mobile-light.svg')",
        desktopDark: "url('/src/assets/images/pattern-background-desktop-dark.svg')",
        tabletDark: "url('/src/assets/images/pattern-background-tablet-dark.svg')",
        mobileDark: "url('/src/assets/images/pattern-background-mobile-dark.svg')"

      }
    }
  },
  plugins: []
}
