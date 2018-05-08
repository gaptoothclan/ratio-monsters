const fs = require('fs');

/**
 * Converts the world map into the original text format
 * @param {object} worldMap 
 * @param {string} outputPath
 */
function convertMapToTextFile(worldMap, outputPath) {
  let mapLines = '';

  worldMap.cityNames.forEach(cityName => {
    const routes = Object.entries(worldMap[cityName].routes).reduce((routesString, route) => {
      return `${routesString} ${route[0]}=${route[1]}`;
    }, '');

    mapLines = `${mapLines}${cityName} ${routes}\n`;
  });

  fs.writeFileSync(outputPath, mapLines);
}

module.exports = convertMapToTextFile;
