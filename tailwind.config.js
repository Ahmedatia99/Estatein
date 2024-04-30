/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        junior:"#141414"
      },
      backgroundImage: {
        'banner-img': "url('./images/banner Design.svg')",
      }
    },
  },
  plugins: [],
};
