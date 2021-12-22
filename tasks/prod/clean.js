const options = require('../../config');
const del = require('del')
const logSymbols = require("log-symbols");

module.exports = function prodClean() {
  console.log("\n\t" + logSymbols.info, "Cleaning build folder for fresh start.\n");
  return del([options.paths.build.base]);
}