const fs = require('fs');

/**
 * Attempts to load a mapPath from disk
 * @param {string} mapPath 
 */
function loadMap(mapPath) {
  if (!fs.existsSync(mapPath)) {
    throw new Error(`${mapPath} does not exist.`);
  }
  
  const fileContents = fs.readFileSync(mapPath);

  return fileContents.toString().trim();
}

module.exports = loadMap;
