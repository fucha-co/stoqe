// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './_site/**/*.html',
    './_data/*.json',
    './**/*.{njk,js,json,md}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Barriecito', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono],
     },
     scale: {
       '102': '1.02',
     },
    extend: {
      fontFamily: {
        'barri': ['Barriecito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        //change: 'black',
        champagne: "#EBD4CB",
        blanchedAlmond: '#FFECD1',
        un: "#009ddb",
        lblue: '#00b2f0',
        azure: '#3B82F6',
        blue: '#0056B4',
        gillette: "#172F6D",
        turq: "#55DDE0",
        pringlessupp: "#fff116", // aureolin
        yellow: '#fff116',
        mustard: '#FCD34D',
        springGreen: '#37FF8B',
        limeGreen: "#23f788",
        jade: '#09A46A',
        greenCrayola: '#15B076',
        oceanGreen: '#22bd83',
        gold: "#C38932",
        pink: '#FF1F87', 
        lightPink: "#FF499E",
        purePink: "#ff0066",
        roseBonbon: '#f9429e',
        famous: "#ff00ff",
        fuscia: '#9B287B',
        pinkLavender: '#E7BBE3',
        purp: '#7D70BA',
        purple: '#5D2E8C',
        aussiehair: "#613169",
        orange: '#F26419',
        gillettesupp: "#f4530c",
        melon: '#FF6666',
        redOrange: "#ff5349",
        red: '#ea393c',
        oldspice: "#A81120",
        nescafe: "#d92527",
        pringles: "#ca2d46",
        vodacom: "#ea3426",
        cinnabar: "#EF3E36",
        coke: '#ed1c16',
        darkRust: '#AF4319',
        grey: '#2c2c2c',
        googleGrey: '#212121',
      },
      placeholderColor: theme => theme('colors'),
       padding: {
        'flexer': '0.91rem',
       },
       fontSize: {
        'sml': '1rem',
        'med': '2rem',
        'norm': '2.75rem',
        'big': '3.75rem',
        'xbig': '8rem',
        'huge': '10rem',
        '10xl': '10rem',
        '9xl': '9rem',
       },
       lineHeight: {
        '-1': '.95',
        '0': '1.05',
        '+1': '1.15',
       },
       letterSpacing: {
        'ss': '-.025em',
        's': '-.01em',
       },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
