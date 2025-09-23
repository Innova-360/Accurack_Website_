// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBg: "var(--navBg)",   // 👈 Tailwind class ko CSS variable ke saath map
        navdemobuttonBg: "var(--navdemobuttonBg)",
      },
    },
  },
  plugins: [],
};
