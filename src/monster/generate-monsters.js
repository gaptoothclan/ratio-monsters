/**
 * Generates an array of monsters of length totalMonsters
 * @param {int} totalMonsters 
 */
function generateMonsters(totalMonsters) {
  const monsters = [];

  for (let i = 0; i < totalMonsters; i++) {
    monsters[i] = i;
  }

  return monsters;
}

module.exports = generateMonsters;
