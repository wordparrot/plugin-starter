var path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 4200,
    open: true
  },
  optimization: {
    minimize: false
  }
};
