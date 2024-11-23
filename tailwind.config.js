/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eng: ["Preahvihear", "sans-serif"],
        kor: ["Gowun Dodum", "sans-serif"],
      },
      keyframes: {
        draw: {
          "0%": { strokeDasharray: "0, 100000" },
          "100%": { strokeDasharray: "100000 , 0" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        draw: "draw 2s linear forwards",
        wave: "wave 5s linear infinite",
      },
    },
  },
  plugins: [],
};
