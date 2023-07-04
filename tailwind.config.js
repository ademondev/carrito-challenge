/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkMode: true,
        customCardColor: '#44403c',
        customCardTextColor: '#616153',
        customPriceCardColor: '#22c655'
      },
    },
  },
  plugins: [],
};
