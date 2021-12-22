const { watch, series, parallel } = require("gulp")
const options = require("./config");
const browserSync = require("browser-sync").create();
const logSymbols = require("log-symbols");

//* Tasks
const previewReload = require('./tasks/reload')

//* Development
const devHTML = require('./tasks/dev/html')
const devStyles = require('./tasks/dev/styles')
const devImages = require('./tasks/dev/images')
const devScripts = require('./tasks/dev/scripts')
const devClean = require('./tasks/dev/clean')

//* Production
const prodHTML = require('./tasks/prod/html')
const prodStyles = require('./tasks/prod/styles')
const prodScripts = require('./tasks/prod/scripts')
const prodImages = require('./tasks/prod/images')
const prodClean = require('./tasks/prod/clean')

function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: options.paths.dist.base
    },
    port: options.config.port || 5000
  });
  done();
}

function watchFiles() {
  watch(`${options.paths.src.base}/views/pages/**/*.pug`, series(devHTML, devStyles, previewReload));
  watch([options.config.tailwindjs, `${options.paths.src.css}/**/*.scss`], series(devStyles, previewReload));
  watch(`${options.paths.src.js}/**/*.js`, series(devScripts, previewReload));
  watch(`${options.paths.src.img}/**/*`, series(devImages, previewReload));
  console.log("\n\t" + logSymbols.info, "Watching for Changes..\n");
}

function buildFinish(done) {
  console.log("\n\t" + logSymbols.info, `Production build is complete. Files are located at ${options.paths.build.base}\n`);
  done();
}

exports.default = series(
  devClean,
  parallel(devStyles, devScripts, devImages, devHTML),
  livePreview,
  watchFiles
);

exports.prod = series(
  prodClean,
  parallel(prodStyles, prodScripts, prodImages, prodHTML),
  buildFinish
);