const options = require("../../config");
const pug = require('gulp-pug');
const { src, dest } = require("gulp")

module.exports = function prodHTML() {
  return src(`${options.paths.src.base}/**/*.pug`)
    .pipe(pug())
    .pipe(dest(options.paths.build.base));
}