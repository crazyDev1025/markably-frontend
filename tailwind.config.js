/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      textColor: {
        cs: "#1d293e",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
