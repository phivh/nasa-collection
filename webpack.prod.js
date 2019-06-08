const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css',
    }),
  ],
});