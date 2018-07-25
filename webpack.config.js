/* eslint-disable */
const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "sourcemap",
  devServer: {
    contentBase: [path.resolve(__dirname, "src")],
    overlay: true,
    publicPath: '/',
    historyApiFallback: true    
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
