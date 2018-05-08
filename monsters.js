const fs = require('fs');
const program = require('commander');

const loadMap = require('./src/map/load-map');
const parseMap = require('./src/map/parse-map');
const generateMonsters = require('./src/monster/generate-monsters');
const placeMonsters = require('./src/monster/place-monsters');
const moveMonster = require('./src/monster/move-monster');
const fight = require('./src/monster/fight');
const convertMapToTextFile = require('./src/map/convert-map');

const MAX_ITERATIONS = 10000;

program
  .option('-m, --total-monsters <n>', 'Total number of monsters')
  .option('-p, --map-path <path>', 'Path to map')
  .option('-o, --output-path [output]', 'Optional output path')
  .parse(process.argv);

let { totalMonsters, mapPath, outputPath } = program;

/**
 * Checks the args passed to the program
 */
function checkProgramArgs() {
  if (!totalMonsters) {
    console.log('Total monsters not specified. Using default 3');
    totalMonsters = 3;
  }
  
  if (!mapPath) {
    console.log('Map path not specified, using world_map_small.txt');
    mapPath = './world_map_small.txt';
  }
  
  if (!outputPath) {
    console.log('Output path not specified, defaulting to new_world.txt');
    outputPath = 'new_world.txt';
  }
}

checkProgramArgs();

/** SETUP */
const worldMap = parseMap(loadMap(mapPath));
console.log('World map built...');

const monsters = generateMonsters(totalMonsters);
console.log('Monsters created...');

placeMonsters(monsters, worldMap);
console.log('Monsters placed...');

let totalIterations = 0;
let currentCityIndex = 0;
let totalDeadMonsters = 0;
let totalCitiesDestroyed = 0;

function incrementDeathTolls() {
  totalCitiesDestroyed++;
  totalDeadMonsters += 2;
}

function mainLoop() {
  while (totalDeadMonsters < totalMonsters && totalIterations < MAX_ITERATIONS && totalCitiesDestroyed < worldMap.cityNames.length) {
    const cityName = worldMap.cityNames[currentCityIndex];
    const city = worldMap[cityName];

    for (let i = 0; i < city.monsters.length; i++) {
      if (city.monsters.length === 2) {
        fight(worldMap, cityName);
        incrementDeathTolls();
        break;
      }

      moveMonster(city.monsters[i], worldMap, city);

      totalIterations++;
    }

    if (currentCityIndex < worldMap.cityNames.length - 1) {
      currentCityIndex++;
    } else {
      currentCityIndex = 0;
    }
  }
}

mainLoop();
convertMapToTextFile(worldMap, outputPath);