/**
 * Finds and deletes references to cityBeingFoughtIn within a city's routes
 * @param {object} city 
 * @param {string} cityBeingFoughtIn 
 */
function findAndDeleteCityReferences(city, cityBeingFoughtIn) {
  Object.keys(city.routes).forEach(cardinalPoint => {
    if (city.routes[cardinalPoint] === cityBeingFoughtIn) {
      delete city.routes[cardinalPoint];
    }
  });
}

/**
 * Two monsters duke it out and kill themselves and destroy the city in the process
 * @param {object} worldMap 
 * @param {string} cityBeingFoughtIn 
 */
function fight(worldMap, cityBeingFoughtIn) {
  const { monsters } = worldMap[cityBeingFoughtIn];

  worldMap.cityNames.forEach(cityName => {
    const city = worldMap[cityName];

    findAndDeleteCityReferences(city, cityBeingFoughtIn);
  });

  delete worldMap[cityBeingFoughtIn];
  
  const cityNameIndex = worldMap.cityNames.indexOf(cityBeingFoughtIn)
  worldMap.cityNames.splice(cityNameIndex, 1);

  console.log(`City ${cityBeingFoughtIn} has been destroyed by monsters ${monsters[0]} & ${monsters[1]}!`);
}

module.exports = fight;
