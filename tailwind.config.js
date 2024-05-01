/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        junior:"#1A1A1A",
        senior:"#141414",
        stroke:"#262626"
      },
      backgroundImage: {
        'banner-img': "url('./images/banner Design.svg')",
      }
    },
  },
  plugins: [],
};
