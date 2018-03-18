const path = require('path');

module.exports = {
  entry: {app:["./src/app.js"]},
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
      },
      {
        test: /\.css$/,
        use: [ {loader: 'style-loader'}, {loader: 'css-loader'} ]
      },
      {
        test: /\.less$/,
        use: [{loader:'style-loader'}, {loader:'css-loader'}, {loader:'less-loader'}]
      },
    ]
  },
  resolve: {
    modules: ['./', 'node_modules'],
  }  
};