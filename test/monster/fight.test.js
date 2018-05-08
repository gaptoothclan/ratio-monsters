const assert = require('chai').assert;

const fight = require('../../src/monster/fight');

describe('fight', function() {
  it('Should delete all references to a city in the world when 2 monsters fight', function() {
    const world = {
      E: {
        routes: {
          north: 'F'
        },
        monsters: [1, 2]
      },
      F: {
        routes: {
          south: 'E'
        },
        monsters: []
      },
      cityNames: ['E', 'F']
    }

    const expected = {
      F: {
        routes: {
        },
        monsters: []
      },
      cityNames: ['F']
    }

    fight(world, 'E');

    assert.deepEqual(world, expected);
  });
});
