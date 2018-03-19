const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve('./client/src/index.jsx'),
  output: {
    path: path.resolve('./client/public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {

        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          'file-loader',
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};