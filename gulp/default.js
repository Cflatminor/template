'use strict';

const { gulp, src, dest, parallel, series, watch } = require ('gulp');

module.exports = function def (cb) {
  console.log ('work');
  cb();
}
