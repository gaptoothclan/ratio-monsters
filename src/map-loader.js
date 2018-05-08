const fs = require('fs');

/**
 * Checks if the file exists exiting if it does not
 * @param {string} mapPath 
 */
function checkMapExists(mapPath) {
  if (!fs.existsSync(mapPath)) {
    console.log(`${mapPath} does not exist. Exiting.`);
    process.exit();
  }
}

/**
 * Attempts to load a mapPath from disk
 * @param {string} mapPath 
 */
function loadMap(mapPath) {
  checkMapExists(mapPath);
  const fileContents = fs.readFileSync(mapPath);

  return fileContents.toString().trim();
}

module.exports = {
  loadMap
};
