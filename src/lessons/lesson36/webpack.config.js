const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' }), new webpack.SourceMapDevToolPlugin({})],
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};