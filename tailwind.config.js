/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },

      boxShadow: {
        "3xl": "0px 0px 25px 1px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        sans: ["Vazirmatn"],
      },
      colors: {
        "backdrop-color": "rgba(0, 0, 0, 0.5)",
        navlinks: "#555775",
        primary: "#6A6C87",
        sloganSecondary: "#9CA3AF",
        sloganPrimary: "#2A2D53",
      },
    },
  },
  plugins: [],
};
