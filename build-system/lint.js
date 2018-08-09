'use strict';

const gulp = require('gulp-help')(require('gulp'));
const $ = require('./util');

gulp.task('lint', 'Lint JS files', function () {
  return gulp.src(['gulpfile.js', 'build-system/**/*.js', 'src/**/*.js*'])
    .pipe($.eslint())
    .pipe($.eslint.format());
});
