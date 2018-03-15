var path = require('path');
var webpack = require('webpack');

console.log('development')
var configs = require('./baseConfigs.js');
configs.mode = 'development'

// Put in development settings here

module.exports = configs;