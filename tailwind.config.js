/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        junior: "#1A1A1A",
        senior: "#141414",
        stroke: "#262626",
        purple: "#703BF7",
        purple_secon: "#A685FA",
        drop_shad: "#191919",
        tasting: "#999999",
        ruby: "#666666",
        guide: "#4D4D4D",
      },
      backgroundImage: {
        "banner-img": "url('./src/assets/images/banner Design.svg')",
        
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        laptop: "1025px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1279px",
      },
    },
  },
  plugins: [],
};
