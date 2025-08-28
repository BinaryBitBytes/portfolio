module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            test: /\.jsx?$/,
            use: ["babel-loader", "astroturf/loader"],
          },
        ],
      },
    ],
  },
};
