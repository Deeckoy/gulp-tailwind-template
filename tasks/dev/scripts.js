const options = require("../../config");
const { src, dest } = require("gulp");
const concat = require('gulp-concat');

module.exports = function devScripts() {
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`,
    `!${options.paths.src.js}/**/external/*`
  ])
    .pipe(concat({ path: 'scripts.js' }))
    .pipe(dest(options.paths.dist.js));
}