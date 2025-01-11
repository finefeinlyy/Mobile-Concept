module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chakra: ['"Chakra Petch"', 'sans-serif'],
      },
      colors: {
        primary: '#34d399', // สีเขียวหลัก
        secondary: '#059669', // สีเขียวรอง
      },
    },
  },
  plugins: [require('daisyui')],
};