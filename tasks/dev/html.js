const options = require("../../config");
const pug = require('gulp-pug');
const { src, dest } = require("gulp");

module.exports = function devHTML() {
  return src(`${options.paths.src.base}/views/pages/**/*.pug`)
    .pipe(pug())
    .pipe(dest(options.paths.dist.base))
}