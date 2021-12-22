const options = require('../../config');
const uglify = require('gulp-terser');
const concat = require('gulp-concat')
const { src, dest } = require('gulp')

module.exports = function prodScripts() {
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`
  ])
    .pipe(concat({ path: 'scripts.js' }))
    .pipe(uglify())
    .pipe(dest(options.paths.build.js));
}