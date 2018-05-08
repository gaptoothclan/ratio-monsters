const directionsRegex = /(\w+)=(\d|\w+)/g;

const worldMap = {};

function createMap() {

}

function getCityAndRoutes(mapLine) {

}

/**
 * @param {string} mapString 
 */
function parseMap(mapString) {
  const lines = mapString.split('\n');

  const cities = lines.map(line => { 
    const city = line.split(' ')[0]; 
    const directions = line.match(directionsRegex);

    worldMap[city] = directions.reduce((city, direction) => {
      const [ cardinalPoint, destination ] = direction.split('=');
      city[cardinalPoint] = destination;

      return city;
    }, {});
  });

  console.log(worldMap);
}

module.exports = {
  parseMap
};
