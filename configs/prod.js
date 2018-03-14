var path = require('path');
var webpack = require('webpack');

var configs = require('./baseConfigs.js');
configs.mode = 'production'

// Put in production settings here

module.exports = configs;