/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "480px",
      },
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
      },
      boxShadow: {
        card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
        cardhover:
          "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
      },
      colors: {
        "custom-gradient-1": "#17bcde",
        "custom-gradient-2": "#3ac7d2",
        "custom-gradient-3": "#62d1c3",
        "custom-gradient-4": "#88d8b7",
        "custom-gradient-5": "#acdeae",
        "custom-gradient-6": "#b8dda1",
        "custom-gradient-7": "#c7dc94",
        "custom-gradient-8": "#d8d988",
        "custom-gradient-9": "#dbcf6c",
        "custom-gradient-10": "#dfc450",
        "custom-gradient-11": "#e6b731",
        "custom-gradient-12": "#eea900",
      },
    },
  },
  plugins: [],
};
