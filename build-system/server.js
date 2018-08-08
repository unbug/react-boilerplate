var gulp = require('gulp-help')(require('gulp'));
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();
var serveIndex = require('serve-index');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');

gulp.task('server', 'Starts a HTTP server for debug.',  cb => {
  var bundler = webpack(webpackConfig.dev);
  var config = {
    open: false,
    cors: true,
    reloadDelay: 1000,
    reloadDebounce: 3000,
    ghostMode: false,
    logPrefix: 'Debug Server',
    codeSync: $.util.env['bs_code_sync'] != 'false',
    notify: false,
    server: {
      baseDir: ['./'],
    },
    https: $.util.env['bs_https'] != 'false',
    serveStatic: ['./'],
    middleware: [
      serveIndex('.'),
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.dev.output.publicPath,
        stats: {colors: true},
        writeToDisk: true,
        logLevel: 'error'
      }),
      webpackHotMiddleware(bundler)
    ]
  };
  if ($.util.env['bs_proxy']) {
    config.server = false;
    config.proxy = $.util.env['bs_proxy'];
  }
  // disable Browsersync scripts in browser
  if (!$.util.env['bs_code_sync']) {
    config.scriptPath = () => '';
  } else {
    gulp.watch(['./app/**/**.**'], browserSync.reload);
  }
  browserSync.init(config, cb);
});
