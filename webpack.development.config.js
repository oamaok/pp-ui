const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.ProvidePlugin({
    Promise: 'bluebird',
    fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
  }),

  // Injects the JS files into the template HTML file
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'client/index.html'),
    inject: 'body',
    filename: 'index.html',
  }),

  // For hot reloading
  new webpack.HotModuleReplacementPlugin(),

  // Magic values
  new webpack.DefinePlugin({
    __DEVELOPMENT__: true,
    __PRODUCTION__: false,
  }),
];

module.exports = {
  entry: {
    app: [
      './client/index.js',
      './assets/style/main.sass',
      'webpack-hot-middleware/client',
    ],
  },
  plugins,

  output: {
    path: path.join(__dirname, 'build/'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['', '.jsx', '.js'],
    modulesDirectories: ['web_modules', 'node_modules', 'client'],
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  postcss: () => [autoprefixer],
};
