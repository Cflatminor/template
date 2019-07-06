'use strict';

import scss from './scssCompile/index.js';

const { gulp, src, dest, parallel, series, watch } = require ('gulp');

// SCSS
function watchScss () {
  watch('app/scss/**/*.scss', { ignoreInitial: false }, scss);
  // watch('app/css/main.css') .on('change', browserSync.reload);
}

module.exports = function watchFiles () {
  // syncBrowsers();
  // JS
  // watch(['app/**/*.js'], { ignoreInitial: false }, jsCompile);
  // watch('app/js/app.js') .on('change', browserSync.reload);

  // NJK
  // watch('app/**/*.njk') .on('change', browserSync.reload);

  watchScss();
};
