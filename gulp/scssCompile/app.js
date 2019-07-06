const { gulp, src, dest } = require ('gulp');
const sass = require ('gulp-sass');
const concat = require ('gulp-concat');
const autoprefixer = require ("gulp-autoprefixer");

module.exports = function app (source, dist, name) {
  return src(source)
    .pipe (sass.sync ().on('error', sass.logError))
  	.pipe (autoprefixer (['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
  	.pipe (concat (name))
    .pipe (dest (dist));
}
