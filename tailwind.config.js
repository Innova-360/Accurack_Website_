// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBg: "var(--navBg)",
        navdemobuttonBg: "var(--navdemobuttonBg)",
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "'Plus Jakarta Sans'", "sans-serif"],
        volkhov: ["var(--font-volkhov)", "Volkhov", "serif"],
      },
    },
  },
  plugins: [],
};
