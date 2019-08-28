'use strict';

const gulp = require('gulp');
const $ = require('./util');

function watch(files, cb) {
  return gulp.watch(files, event => {
    $.util.log($.util.colors.bold('File ' + event.path + ' was ' + event.type + ', running tasks...'));
    cb();
  });
}

// Watches for changes in files.
gulp.task('watch', cb => {
  watch(['lib.config.js'], () => gulp.series('lint', 'build:extra', 'build:lib-js', 'build:lib-css'));
  watch(['styles/**/*.*'], () => gulp.series('lint', 'build:app-css'));
  cb();
});
