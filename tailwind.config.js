/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-jp": ["Noto Sans JP", "cursive"],
      },
      animation: {
        "slide-in-top": "slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-out-top": "slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both"
      },
      keyframes: {
          "slide-in-top": {
              "0%": {
                  transform: "translateY(-1000px)",
                  opacity: "0"
              },
              to: {
                  transform: "translateY(0)",
                  opacity: "1"
              }
          },
          "slide-out-top": {
            "0%": {
                transform: "translateY(0)",
                opacity: "1"
            },
            to: {
                transform: "translateY(-999px)",
                opacity: "0"
            }
          }
      }
      }
    },
  plugins: [],
};