const path = require("path");
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
  }
  // plugins: [
  //   new ClosureCompilerPlugin({
  //     compiler: {
  //       language_in: "ECMASCRIPT6",
  //       language_out: "ECMASCRIPT5",
  //       compilation_level: "ADVANCED"
  //     },
  //     concurrency: 3
  //   })
  // ]
};
