const path = require('path');

console.log(path.resolve(), 'path.resolve');

module.exports = {
  entry: {app:["./app.js"]},
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist/'),
  },
  devtool: "sourcemap",
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