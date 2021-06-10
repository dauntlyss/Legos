var assert = require('assert');
var lego = require('../legos');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile

describe('test LegoPileCount function', function() {
  describe('find no bricks in pile', function() {
		it('assert that if there are no inserted bricks none are found', function() {
			var brick0 = new Brick(3, "black");
			var pile = new LegoPile();

			assert.equal(pile.legoPileCount(), 0);
		});
	});

  describe('find one brick in pile', function() {
		it('assert that the one inserted brick is found in the pile', function() {
			var brick0 = new Brick(3, "black");
			var pile = new LegoPile();
			pile.insert(brick0);
			assert.equal(pile.legoPileCount(), 1);
		});
	});

	describe('find five bricks', function() {
		it('assert that the five inserted bricks are found in the pile', function() {
			var brick0 = new Brick(6, "blue");
			var brick1 = new Brick(17, "green");
			var brick2 = new Brick(8, "white");
			var brick3 = new Brick(4, "red");
      var brick4 = new Brick(3, "black");
			var pile = new LegoPile();
			pile.insert(brick0);
			pile.insert(brick1);
			pile.insert(brick2);
			pile.insert(brick3);
      pile.insert(brick4);
			assert.equal(pile.legoPileCount(), 5);
		});
	});

	describe('find 10 bricks within multple BSTs', function() {
		it('assert that the 10 inserted bricks are found in the pile', function() {
			var brick0 = new Brick(53, "white");
			var brick1 = new Brick(43, "green");
			var brick2 = new Brick(50, "white");
			var brick3 = new Brick(43, "green");
			var brick4 = new Brick(12, "white");
			var brick5 = new Brick(42, "green");
			var brick6 = new Brick(32, "white");
			var brick7 = new Brick(97, "green");
			var brick8 = new Brick(64, "white");
			var brick9 = new Brick(22, "green");
			var pile = new LegoPile();
			pile.insert(brick0);
			pile.insert(brick1);
			pile.insert(brick2);
			pile.insert(brick3);
			pile.insert(brick4);
			pile.insert(brick5);
			pile.insert(brick6);
			pile.insert(brick7);
			pile.insert(brick8);
			pile.insert(brick9);
			assert.equal(pile.legoPileCount(), 10);
		});
	});
});
