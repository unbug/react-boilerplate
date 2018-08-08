var gulp = require('gulp-help')(require('gulp'));
var $ = require('gulp-load-plugins')();
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var runSequence = require('run-sequence');
var env = process.env.NODE_ENV;

gulp.task('build:app-js', 'Builds the app scripts', () => {
  return new Promise(resolve => webpack(webpackConfig[env === 'production' ? 'prod' : 'dev'], function (err, stats) {
    if (err) throw new $.util.PluginError('webpack', err);
    let errorStats = stats.toString('errors-only');
    if (errorStats != '') $.util.log('[webpack]', errorStats);
    resolve()
  }));
});

gulp.task('build:app-css', 'Builds the app style', cb => {
  gulp.src(['./style/**/*.scss'], {buffer: true})
    .pipe($.sass({
      outputStyle: 'expanded',
      sourceMap: 'styles.css.map',
      sourceMapContents: true,
      sourceMapEmbed: false,
      includePaths: ['./node_modules/']
    }).on('error', $.sass.logError))
    .pipe($.cached('sass-cache', {
      optimizeMemory: true
    }))
    .pipe($.autoprefixer())
    .pipe(gulp.dest('./app/css/'))
    .on('end', function () {
      cb();
    });
});

gulp.task('build', 'Builds the app', cb => {
  runSequence(['build:app-js', 'build:app-css'], cb);
});
