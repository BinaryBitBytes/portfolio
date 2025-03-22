// const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern":
          "url('https://images.newscientist.com/wp-content/uploads/2021/09/01154236/PRI_197379901.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
        "about-img":
          "url('https://cosmosmagazine.com/wp-content/uploads/2020/02/190613_atoms_full-1440x813.jpg')",
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require("tailwindcss"),
  ],
};
