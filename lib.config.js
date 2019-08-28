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
// configs for service worker, get request only, not in "included" url won't be cached
exports.serviceWorker = {
  included: [ // cache then network, url must start with it's host
  ],
  networkOnly: [ // network falling back to cache, url|path|etc must included in "included"
  ],
  cacheOnly: [ // cache fallback to network, url|path|etc must included in "included"
  ],
  excluded: [ // won't be cache, url|path|etc must included in "included"
  ]
}
