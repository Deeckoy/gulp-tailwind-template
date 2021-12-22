const options = require("../../config");
const tailwindcss = require("tailwindcss");
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const autoprefixer = require("autoprefixer")
const sass = require('gulp-sass')(require('sass'));
const { src, dest } = require("gulp");

module.exports = function devStyles() {
  return src(`${options.paths.src.css}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(options.paths.src.css))
    .pipe(postcss([
      require('tailwindcss'),
      require('autoprefixer'),
      // tailwindcss(options.config.tailwindjs),
      // autoprefixer(),
    ]))
    .pipe(concat({ path: 'styles.css' }))
    .pipe(dest(options.paths.dist.css))
}