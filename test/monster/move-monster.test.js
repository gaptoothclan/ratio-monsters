const assert = require('chai').assert;

const moveMonster = require('../../src/monster/move-monster');

describe('moveMonster', function() {
  it('Should move a monster from one city to another', function() {
    const expected = {
      E: {
        routes: {
          north: 'F'
        },
        monsters: []
      },
      F: {
        routes: {},
        monsters: [1]
      },
      cityNames: ['E', 'F']
    }

    const world = {
      E: {
        routes: {
          north: 'F'
        },
        monsters: [1]
      },
      F: {
        routes: {},
        monsters: []
      },
      cityNames: ['E', 'F']
    }

    moveMonster(1, world, world.E);

    assert.deepEqual(world, expected);
  });

  it('Should not move the monster if there are no available routes', function() {
    const world = {
      E: {
        routes: {
        },
        monsters: [1]
      },
      F: {
        routes: {},
        monsters: []
      },
      cityNames: ['E', 'F']
    }

    const expected = world;

    moveMonster(1, world, world.E);

    assert.deepEqual(world, expected);
  });
});
