'use strict';

const gulp = require('gulp-help')(require('gulp'));
const $ = require('./util');
const runSequence = require('run-sequence');

function watch(files, cb) {
  return gulp.watch(files, function (event) {
    $.util.log($.util.colors.bold('File ' + event.path + ' was ' + event.type + ', running tasks...'));
    cb();
  });
}

gulp.task('watch', 'Watches for changes in files',
  () => {
    watch(['lib.config.js'], () => runSequence('lint', 'build:lib-js', 'build:lib-css'));
    watch(['style/**/*.*'], () => runSequence('lint', 'build:app-css'));
  });
