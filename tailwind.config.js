/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        footerBg: "url('./src/assets/footer-bg.jpg')",
        bannerBg: "url('./src/assets/bannerBg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
