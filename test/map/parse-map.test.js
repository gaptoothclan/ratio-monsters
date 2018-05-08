const assert = require('chai').assert;

const parseMap = require('../../src/map/parse-map');

describe('parseMap', function() {
  it('Parse a string of format <City> <cardinal>=<city>', function() {
    const mapStrig = `E north=N south=S\nN south=E`
    const expected = {
      E: {
        routes: {
          north: 'N',
          south: 'S'
        },
        monsters: []
      },
      N: {
        routes: {
          south: 'E'
        },
        monsters: []
      },
      cityNames: ['E', 'N']
    }

    const actual = parseMap(mapStrig);

    assert.deepEqual(actual, expected);
  });
});
