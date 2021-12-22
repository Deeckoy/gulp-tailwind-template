const options = require("../../config");
const cleanCSS = require('gulp-clean-css');
const purgecss = require('gulp-purgecss');
const { src, dest } = require('gulp')

module.exports = function prodStyles() {
  return src(`${options.paths.dist.css}/**/*`)
    .pipe(purgecss({
      content: ['src/**/*.{html,js}'],
      defaultExtractor: content => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
        return broadMatches.concat(innerMatches)
      }
    }))
    .pipe(cleanCSS({ compatibility: '*' }))
    .pipe(dest(options.paths.build.css));
}