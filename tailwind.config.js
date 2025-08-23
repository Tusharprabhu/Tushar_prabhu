/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }
    },
  },
  plugins: [],
}