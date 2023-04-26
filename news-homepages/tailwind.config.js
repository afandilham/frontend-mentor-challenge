/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        softOrange: '#FFA15A',
        softRed: '#FF5349',
        offWhite: '#FCFCFC',
        grayishBlue: '#A2A9B1',
        darkGrayishBlue: '#4B4F5B',
        veryDarkBlue: '#050505',
      },
    },
  },
  plugins: [],
}
