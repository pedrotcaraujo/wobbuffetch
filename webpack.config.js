const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/wobbuffetch.js'],
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: 'umd',
    library: 'wobbuffetch'
  },
  resolve: {
    modulesDirectories: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
