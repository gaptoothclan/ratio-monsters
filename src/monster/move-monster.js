/**
 * Moves a monster from it's current city to a random city following the available routes. Returns true if the monster fought with another, false otherwise
 * @param {int} monster 
 * @param {object} worldMap 
 * @param {string} city 
 * @returns {boolean} 
 */
function moveMonster(monster, worldMap, city) {
  const cardinalPoints = Object.keys(city.routes);

  if (cardinalPoints.length === 0) {
    return; // All of the surrounding cities are destroyed :(
  }

  const randomIndex =  Math.floor(Math.random() * Math.floor(cardinalPoints.length));
  const directionToMove = cardinalPoints[randomIndex];
  const cityToMoveTo = city.routes[directionToMove];


  city.monsters.splice(city.monsters.indexOf(monster), 1);

  worldMap[cityToMoveTo].monsters.push(monster);
}

module.exports = moveMonster;
