const options = require('../../config');
const imagemin = require('gulp-imagemin');
const { src, dest } = require('gulp')

module.exports = function prodImages() {
  return src(`${options.paths.src.img}/**/*`)
    .pipe(imagemin())
    .pipe(dest(options.paths.build.img));
}