import autoprefixer from "autoprefixer";
module.exports = {
  plugins: {
    autoprefixer: autoprefixer,
    "@tailwindcss/postcss": {},
    "postcss-nested": {}, // Uncomment and enable if you need nested CSS syntax support
  },
};
