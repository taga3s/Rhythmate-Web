/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
    extend: {
      fontFamily: {
        "noto-sans-jp": ["Noto Sans JP", "cursive"],
      },
    },
  },
  plugins: [],
};
