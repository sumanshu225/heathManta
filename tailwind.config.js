/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "neon-orange" : "#FF5F1F",
        "neon-green" : "#ccff02"
      }
    },
  },
  plugins: [],
}
