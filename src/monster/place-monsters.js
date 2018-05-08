/**
 * Attempts to find a city with capacity for a monster. Returns null if all cities are full
 * @param {object} worldMap 
 * @returns {null}
 */
function findCityWithCapacity(worldMap) {
  for (let i = 0; i < worldMap.cityNames.length; i++) {
    const cityName = worldMap.cityNames[i];

    if (worldMap[cityName].monsters.length < 2) {
      return worldMap[cityName];
    }
  }

  return null;
}

/**
 * Places the monsters on the map
 * @param {array} monsters 
 * @param {object} worldMap 
 */
function placeMonsters(monsters, worldMap) {
  for (let i = 0; i < monsters.length; i++) {
    const monster = monsters[i];
    const cityIndex =  Math.floor(Math.random() * Math.floor(worldMap.cityNames.length));
    const cityName = worldMap.cityNames[cityIndex];
  
    let city = worldMap[cityName];
  
    if (city.monsters.length === 2) {
      city = findCityWithCapacity(worldMap);
    }

    if (!city) {
      break;
    }

    city.monsters.push(monster);
  }
}

module.exports = placeMonsters;
