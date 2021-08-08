'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const pkg = require('./package.json');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    demo: './src/index.js'
  },
  mode: env,
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js',
    chunkFilename: '[chunk].js',
    clean: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: pkg.name,
      template: './src/assets/index.html'
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.scss$/,
        use: [
          'style-loader', 
          { loader: 'css-loader' , options: { modules: true} }, 
          'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    compress: true,
    port: 3000,
    host: 'localhost',
    hot: true,
    inline: true
  }
};