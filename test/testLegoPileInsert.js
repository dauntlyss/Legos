var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

var Brick = lego.Brick;
var LegoPile = lego.LegoPile;

describe('test LegoPileInsert function', function() {
  describe('insert one brick', function() {
    it('assert inserted brick is inserted into "red"', function() {
      var brick0 = new Brick(30, "red");
      var pile = new LegoPile();
      pile.insert(brick0);
      assert.equal(pile.datastore["red"].root.data, brick0);
    });

    it('assert inserted brick is inserted into "black"', function() {
      var brick0 = new Brick(30, "black");
      var pile = new LegoPile();
      pile.insert(brick0);
      assert.equal(pile.datastore["black"].root.data, brick0);
    });
  });

  describe('insert one brick of each color', function() {
    it('assert one brick of each color should go into proper pile', function() {
      var brick0 = new Brick(30, "black");
      var brick1 = new Brick(30, "white");
      var brick2 = new Brick(30, "green");
      var brick3 = new Brick(30, "yellow");
      var brick4 = new Brick(30, "red");
      var brick5 = new Brick(30, "blue");
      var pile = new LegoPile();

      pile.insert(brick0);
      pile.insert(brick1);
      pile.insert(brick2);
      pile.insert(brick3);
      pile.insert(brick4);
      pile.insert(brick5);

      assert.equal(pile.datastore["black"].root.data, brick0);
      assert.equal(pile.datastore["white"].root.data, brick1);
      assert.equal(pile.datastore["green"].root.data, brick2);
      assert.equal(pile.datastore["yellow"].root.data, brick3);
      assert.equal(pile.datastore["red"].root.data, brick4);
      assert.equal(pile.datastore["blue"].root.data, brick5);
    });
  });

  describe('insert several bricks of one color', function() {
    it('assert that all 4 bricks of black will go in black pile only', function() {
      var brick0 = new Brick(40, "black");
      var brick1 = new Brick(30, "black");
      var brick2 = new Brick(50, "black");
      var brick3 = new Brick(10, "black");
      var pile = new LegoPile();

      pile.insert(brick0);
      pile.insert(brick1);
      pile.insert(brick2);
      pile.insert(brick3);

      assert.equal(pile.datastore["black"].root.data, brick0);
      assert.equal(pile.datastore["black"].root.left.data, brick1);
      assert.equal(pile.datastore["black"].root.right.data, brick2);
      assert.equal(pile.datastore["black"].root.left.left.data, brick3);
    });
  });
});
