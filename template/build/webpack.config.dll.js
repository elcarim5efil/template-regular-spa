const webpack = require('webpack');
const path = require('path');
const _ = require('./utils');
const buildConfig = require('./build.config');

console.log(_.resolve(buildConfig.output, 'dll'))

module.exports = {
  mode: 'production',
  entry: {
    runtime: [
      'regularjs',
      'nek-ui',
      'axios'
    ]
  },
  output: {
    path: _.resolve(buildConfig.output, 'dll'),
    library: '[name]_[chunkhash]',
    filename: '[name]_[chunkhash].js',
  },
  resolve: {
    alias: {
      'regularjs': _.resolve('./node_modules/nek-ui/dist/vendor/regular.js'),
    }
  },
  devtool: "source-map",
  plugins: [
    new webpack.DllPlugin({
      context: _.resolve(),
      name: '[name]_[chunkhash]',
      path: _.resolve(buildConfig.output, 'dll/manifest.json'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
}