// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBg: "var(--navBg)",
        navbookademobg1: "var(--navbookademobg1)",
        navbookademobg2: "var(--navbookademobg2)",
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)"],
        volkhov: ["var(--font-volkhov)", "Volkhov", "serif"],
      },
    },
  },
  plugins: [],
};
