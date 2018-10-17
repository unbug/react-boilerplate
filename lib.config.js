'use strict';

exports.js = [
  './node_modules/react/umd/react.production.min.js',
  './node_modules/react-dom/umd/react-dom.production.min.js',
  './node_modules/nprogress/nprogress.js',
  './node_modules/smoothscroll-polyfill/dist/smoothscroll.js', // http://iamdustan.com/smoothscroll/
];

exports.css = [
  './node_modules/semantic-ui-css/semantic.min.css',
  './node_modules/nprogress/nprogress.css'
];

exports.extra = [{
  'css/themes': './node_modules/semantic-ui-css/themes/**'
}];
