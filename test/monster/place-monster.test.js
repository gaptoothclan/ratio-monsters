const assert = require('chai').assert;

const placeMonsters = require('../../src/monster/place-monsters');

describe('placeMonster', function() {
  it('Should place monsters in a world', function() {
    const expected = {
      E: {
        routes: {
          north: 'N',
          south: 'S'
        },
        monsters: [1, 2]
      },
      cityNames: ['E']
    }

    const world = {
      E: {
        routes: {
          north: 'N',
          south: 'S'
        },
        monsters: []
      },
      cityNames: ['E']
    }

    placeMonsters([1, 2], world);

    assert.deepEqual(world, expected);
  });

  it('Should place monsters in the next available city when the randomly picked one is full', function() {
    const expected = {
      E: {
        routes: {
          north: 'N',
          south: 'S'
        },
        monsters: [1, 2]
      },
      F: {
        routes: {},
        monsters: [3]
      },
      cityNames: ['E', 'F']
    }

    const world = {
      E: {
        routes: {
          north: 'N',
          south: 'S'
        },
        monsters: [1, 2]
      },
      F: {
        routes: {},
        monsters: []
      },
      cityNames: ['E', 'F']
    }

    placeMonsters([3], world);

    assert.deepEqual(world, expected);
  });
});
