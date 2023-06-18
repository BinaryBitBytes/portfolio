// const typography = require('@tailwindcss/typography');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('https://images.newscientist.com/wp-content/uploads/2021/09/01154236/PRI_197379901.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'about-img': "url('https://github.com/BinaryBitBytes/portfolio/blob/ca40fbe73c6fc70c8ed4688228a68c5f1f3f5260/public/coding.png')"
      }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('tailwindcss'),
  ],
}

