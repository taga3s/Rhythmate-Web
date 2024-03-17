/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-jp": ["Noto Sans JP", "cursive"],
        "cp-font": ["CP Font", "Append CP Font"]
      },
      colors: {
        'rhyth-light-blue': '#1EA1FF',
        'rhyth-blue': '#0087EE',
        'rhyth-dark-blue': '#004479',
        'rhyth-orange': '#FFAA00',
        'rhyth-red': '#E0201B',
        'rhyth-dark-red': '#B11815',
        'rhyth-green': '#28AC00',
        'rhyth-purple': '#DA06AC',
        'rhyth-yellow': '#F7CE00',
        'rhyth-light-gray': '#D9D9D9',
        'rhyth-gray': '#AAAAAA',
        'rhyth-black': '#333333',
        'rhyth-bg-gray': '#FAFAFA',
        'rhyth-bg-dark-gray': '#F5F5F5',
      },
      // animation: {
      //   "glow": "glow 2s infinite ease",
      //   "shine": "shine 10s infinite"
      // },
      // keyframes: {
      //   "glow": {
      //     "0%, 100%": {
      //       boxShadow: '1px 1px #1D8758, 0 0 20px 5px #8FFFCF, inset 2px 2px'
      //     },
      //     "50%": {
      //       boxShadow: 'box-shadow: 1px 1px #1D8758, 0 0 16px 8px #8FFFCF, inset 2px 2px #D3FFEC'
      //     }
      //   },
      //   "shine": {
      //     "0%": {
      //       opacity: 0,
      //     },
      //     "34%": {
      //       opacity: 0,
      //       transform: 'rotate(15deg)',
      //     },
      //     "40%": {
      //       opacity: 0.6,
      //       transform: 'rotate(620deg)',
      //     },
      //     "48%, 100%": {
      //       opacity: 0,
      //       transform: 'rotate(635deg)',
      //     }
      //   }
      // }
    },
  },
  plugins: [],
};
