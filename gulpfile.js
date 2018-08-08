'use strict';
/* eslint-disable no-console */
try {
  var gulp = require('gulp-help')(require('gulp'));
  var $ = require('gulp-load-plugins')();
  var runSequence = require('run-sequence');
  var requireDir = require('require-dir');
  requireDir('./build-system');
} catch (e) {
  console.log(e.toString());
  console.log('>>>> Failed to require dependency modules');
  console.log('>>>> Please try "npm install"');
  process.exit(1);
}

// Run tasks: clean, lint, build, docs, watch, server
gulp.task('default', function (cb) {
  $.util.log(
    $.util.colors.green('Building and watching for changes ...')
  );
  runSequence('clean', 'lint', 'build', 'watch', 'server', function () {
    cb();
    $.util.log(
      $.util.colors.green('All set! Please run "gulp help" to see all build command usages.'), '\n'
    );
  });
});
