/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-jp": ["Noto Sans JP", "cursive"],
      },
    },
  },
  plugins: [],
};
