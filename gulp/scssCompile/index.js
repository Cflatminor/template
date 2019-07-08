'use strict';

import app from './app.js'

module.exports = function scss (cb) {
  app('app/scss/app.scss', 'dist/css/', 'app.css');
  cb();
};
