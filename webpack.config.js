const path = require("path");
const RemoveStrictPlugin = require("remove-strict-webpack-plugin");
const entry = path.join(__dirname, "src/dweet.js");
const dist = path.join(__dirname, "dist");

module.exports = {
  entry: ["webpack/hot/dev-server", entry],
  output: {
    path: dist,
    filename: "bundle.js",
    publicPath: "dist"
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    hot: true,
    port: 8080
  },
  plugins: [new RemoveStrictPlugin()]
};
