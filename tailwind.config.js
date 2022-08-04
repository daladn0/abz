/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4E041",
        error: "#CB3D40",
      },
      maxWidth: {
        heroMax: "380px",
      },
      backgroundImage: {
        heroBG: 'url("@/assets/images/hero.jpeg")',
      },
      fontSize: {
        heading: "40px",
      },
    },
  },
  plugins: [],
};
