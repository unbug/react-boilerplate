'use strict';

let util = require('gulp-load-plugins')();
const argv = require('minimist')(process.argv.slice(2));
const log = require('fancy-log');
const colors = require('ansi-colors');
const PluginError = require('plugin-error');

util.util = {
  argv: argv,
  log: log,
  colors: colors,
  PluginError: PluginError
};

module.exports = util;
