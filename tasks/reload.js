const browserSync = require("browser-sync").create();
const logSymbols = require("log-symbols");

module.exports = function previewReload(done) {
  console.log("\n\t" + logSymbols.info, "Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}