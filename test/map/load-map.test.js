const assert = require('chai').assert;
const proxyquire = require('proxyquire');
const fsStub = {};

const loadMap = proxyquire('../../src/map/load-map', { 'fs': fsStub });


describe('loadMap', function() {
  it('Should load a map from disk and return the contents as a string', function() {
    const expected = 'test';

    fsStub.existsSync = function(path) { return true };
    fsStub.readFileSync = function(path) { return expected };

    const actual = loadMap('test');

    assert.typeOf(actual, 'string');
    assert.equal(actual, expected);
  });

  it('Should throw an error when the provided file doesn\'t exist', function() {
    fsStub.existsSync = function(path) { return false };

    assert.throws(loadMap, Error);
  });
});
