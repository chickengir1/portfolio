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
        bounceUpDown: {
          "0%, 100%": { transform: "translateY(-2px)" },
          "50%": { transform: "translateY(4px)" },
        },
        dropShadow: {
          strong: "0px 4px 6px rgba(0, 0, 0, 0.8)",
        },
      },
      animation: {
        draw: "draw 2s linear forwards",
        bounceUpDown: "bounceUpDown 1.5s infinite",
      },
    },
  },
  plugins: [],
};
