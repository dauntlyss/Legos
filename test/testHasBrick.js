var assert = require('assert');
var lego = require('../legos');

var Brick = lego.Brick;
var LegoPile = lego.LegoPile;

describe('test if lego pile has brick', function() {
  describe('find brick', function() {
    it('assert one brick is found', function() {
      var brick0 = new Brick(30, "blue");
      var pile = new LegoPile();
      pile.insert(brick0);
      assert.equal(pile.hasBrick(30, "blue"), true);
    });
  });

  describe('find two bricks in two different trees', function() {
    it('assert the first bricks inserted into trees are found', function() {
      var brick0 = new Brick(30, "blue");
      var brick1 = new Brick(40, "blue");
      var brick2 = new Brick(50, "green");
      var brick3 = new Brick(55, "green");
      var pile = new LegoPile();

      pile.insert(brick0);
      pile.insert(brick1);
      pile.insert(brick2);
      pile.insert(brick3);

      assert.equal(pile.hasBrick(40, "blue"), true);
      assert.equal(pile.hasBrick(55, "green"), true);
    });
  });
});
