'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./configs/dev.js');
webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/"); 

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  publicPath: '/dist/',
  historyApiFallback: true,
  open:true,
  inline: true,
  stats: {
    colors: true
  }
});

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');
});