'use strict';

const gulp = require('gulp-help')(require('gulp'));
const $ = require('./build-system/util');
const runSequence = require('run-sequence');
const requireDir = require('require-dir');
requireDir('./build-system');

// Run tasks: clean, lint, build, docs, watch, server
gulp.task('default', function (cb) {
  $.util.log(
    $.util.colors.green('Building and watching for changes ...')
  );
  runSequence('clean', 'lint', 'build:app-css', 'watch', 'server', function () {
    cb();
    $.util.log(
      $.util.colors.green('Ready! Run "gulp help" for more build command usages.'), '\n'
    );
  });
});
