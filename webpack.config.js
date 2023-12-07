const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
  mode: "production",
  entry: {
    index: "./public/index.js",
  },
  output: {
    path: dist,
    filename: "[name].js",
  },
  devServer: {
    contentBase: dist,
    port: process.env.PORT || 3000,
  },
  plugins: [
    new CopyPlugin([path.resolve(__dirname, "public")]),

    new CopyPlugin([{ from: "static", to: "static" }]),

    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ],
};
