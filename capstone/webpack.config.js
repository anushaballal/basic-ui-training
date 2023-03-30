const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("sass-loader");

module.exports = {
  mode: "development",
  entry: ["./resources/scripts/main.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./dist/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      /* {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "css/", name: "[name].css" },
          },
          "sass-loader",
        ],
      }, */
    ],
  },
};
