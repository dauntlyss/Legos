var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('testBrickConstructor', function() {
  describe('test typeof', function() {
    it('assert that size of brick is type number', function() {
      var someBrick = new Brick(2, "color");
      var result = someBrick.size;
      assert.equal(typeof result, 'number');
    });
  });
});
