/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        screenBg: '#0B0B0C',
        bannerPurple: '#9892F7',
        planYellow: '#FCAE59',
        planBlue: '#B7E2FE',
        planPink: '#F092DC',
        dockNav: '#26233B',
        cardText: '#1A1926',
        subText: '#7D7C84',
      }
    },
  },
  plugins: [],
}