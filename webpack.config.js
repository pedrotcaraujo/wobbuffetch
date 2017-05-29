const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: ['./src/wobbuffetch.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    libraryTarget: 'umd',
    library: 'wobbuffetch'
  },
  externals: [
    {
      'isomorphic-fetch': {
        root: 'isomorphic-fetch',
        commonjs2: 'isomorphic-fetch',
        commonjs: 'isomorphic-fetch',
        amd: 'isomorphic-fetch'
      }
    }
  ],
  resolve: {
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    extensions: ['.js']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
