const path = require('path');

module.exports = {
  entry: path.resolve('./app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};