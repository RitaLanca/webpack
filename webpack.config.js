const { mode } = require("webpack-nano/argv");
const {
MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");

module.exports = {
  mode, // It allows to pass the mode set on the command line. build modes:" production","development" or "none". It will affects minification and optimizations
  plugins: [new MiniHtmlWebpackPlugin({ context: {title: "Demo"}})] // this will create automatically a index.html and injects the bundle on it
}

