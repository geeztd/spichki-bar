/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        xmd: "882px",
      },
      colors: {
        gray: `#2E2E2E`,
        brown: `#815F4B`,
        lightBrown: `#BFA68D`,
      },
    },
  },
  plugins: [],
};
