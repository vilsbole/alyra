// webpack.config.js
var path = require('path');

module.exports = {
  entry: ['./index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 9000
  }
};
