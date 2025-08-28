//Src //? https://github.com/postcss/autoprefixer?tab=readme-ov-file#javascript

const autoprefixer = require("autoprefixer");
const postcss = require("postcss");

postcss([autoprefixer])
  .process(css)
  .then((result) => {
    result.warnings().forEach((warn) => {
      console.warn(warn.toString());
    });
    console.log(result.css);
  });
