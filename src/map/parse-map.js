/**
 * Gets the routes of a city from a map line
 * @param {string} mapLine 
 */
function getCityRoutes(city, mapLine) {
  const directions = mapLine.match(/(\w+)=([a-zA-Z0-9-_]+)/g);

  const routes = directions.reduce((city, direction) => {
    const [ cardinalPoint, destination ] = direction.split('=');
    city[cardinalPoint] = destination;

    return city;
  }, {});

  return { [city]: { routes, monsters: [] } };
}

/**
 * Gets the city from a map line
 * @param {string} mapLine 
 */
function getCity(mapLine) {
  return mapLine.split(' ')[0]
}

/**
 * Parses a mapString and returns a built world map (a glorified dictionary)
 * @param {string} mapString 
 */
function parseMap(mapString) {
  const lines = mapString.split('\n');
  const worldMap = {};
  const cityNames = []

  lines.forEach(line => { 
    const city = getCity(line);
    cityNames.push(city);
    Object.assign(worldMap, getCityRoutes(city, line));
  });

  return { ...worldMap, cityNames };
}

module.exports = parseMap;
