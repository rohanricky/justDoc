var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: [__dirname+'/src/index.js','react-hot-loader/patch'],
  target: 'node',
  /*output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js'
  },*/
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin({banner:'require("source-map-support").install();',
                              raw: true, entryOnly: false })
  ],
  devtool: 'sourcemap',
  devServer : {
    historyApiFallback : true
  }
}
