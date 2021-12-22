const options = require("../../config");
const del = require('del');
const logSymbols = require("log-symbols");

module.exports = function devClean() {
  console.log("\n\t" + logSymbols.info, "Cleaning dist folder for fresh start.\n");
  return del([options.paths.dist.base]);
}