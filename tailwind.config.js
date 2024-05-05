/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-jp": ["Noto Sans JP", "cursive"],
        "cp-font": ["CP Font"],
      },
      colors: {
        "rhyth-light-blue": "#1EA1FF",
        "rhyth-blue": "#0087EE",
        "rhyth-dark-blue": "#004479",
        "rhyth-orange": "#FFAA00",
        "rhyth-red": "#E0201B",
        "rhyth-dark-red": "#B11815",
        "rhyth-green": "#28AC00",
        "rhyth-purple": "#DA06AC",
        "rhyth-yellow": "#F7CE00",
        "rhyth-light-gray": "#D9D9D9",
        "rhyth-gray": "#777777",
        "rhyth-black": "#333333",
        "rhyth-bg-gray": "#FAFAFA",
        "rhyth-bg-dark-gray": "#F5F5F5",
        "rhyth-hover-light-gray": "#E5E5E5",
        "rhyth-hover-gray": "#D2D2D2",
        "rhyth-hover-green": "#229300",
        "rhyth-hover-blue": "#0079D5",
        "rhyth-hover-red": "#B11815",
      },
      keyframes: {
        expbar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadein: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        expbar: "expbar 0.5s ease-out 1",
        fadein: "fadein 0.24s ease-out 1",
      },
    },
  },
  plugins: [],
};
