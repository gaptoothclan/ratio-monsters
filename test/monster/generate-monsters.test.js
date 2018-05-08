const assert = require('chai').assert;

const generateMonsters = require('../../src/monster/generate-monsters');

describe('generateMonsters', function() {
  it('Should generate an array of integers given input n', function() {
    const expected = [0, 1, 2, 3, 4, 5];
    const actual = generateMonsters(expected.length);

    assert.deepEqual(actual, expected);
  });
});
