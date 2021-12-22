const options = require("../../config");
const { src, dest } = require("gulp");

module.exports = function devImages() {
  return src(`${options.paths.src.img}/**/*`)
    .pipe(dest(options.paths.dist.img));
}