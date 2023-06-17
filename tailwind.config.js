// const typography = require('@tailwindcss/typography');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('https://images.newscientist.com/wp-content/uploads/2021/09/01154236/PRI_197379901.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('tailwindcss'),
  ],
}

