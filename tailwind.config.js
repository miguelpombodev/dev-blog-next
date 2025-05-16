/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        clash: ["ClashDisplay-Medium", "sans-serif"],
      },
      borderRadius: {
        "1/20": "20%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
