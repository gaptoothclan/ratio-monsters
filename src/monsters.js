const fs = require('fs');
const program = require('commander');

const mapLoader = require('./map-loader');
const mapParser = require('./map-parser');

program
  .option('-m, --total-monsters <n>', 'Total number of monsters')
  .option('-p, --map-path <path>', 'Path to map')
  .parse(process.argv);

let { totalMonsters, mapPath } = program;

/**
 * Checks the args passed to the program
 */
function checkProcessArgs() {
  if (!totalMonsters) {
    console.log('Total monsters not specified. Using default 3');
    totalMonsters = 3;
  }
  
  if (!mapPath) {
    console.log('Map path not specified, using world_map_small.txt');
    mapPath = './world_map_small.txt';
  } 
}

checkProcessArgs();

mapParser.parseMap(mapLoader.loadMap(mapPath));
