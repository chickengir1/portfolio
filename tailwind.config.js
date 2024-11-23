/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        draw: {
          "0%": { strokeDasharray: "0, 100000" },
          "100%": { strokeDasharray: "100000 , 0" },
        },
      },
      animation: {
        draw: "draw 2s linear forwards",
      },
    },
  },
  plugins: [],
};
