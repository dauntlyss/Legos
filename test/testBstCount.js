var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('test BSTcount function', function() {
	describe('counts one brick', function() {
    it('assert that the count of nodes for a bst with one brick is 1', function() {
		  var brick0 = new Brick(10, "red");
		  var tree = new BST();
		  tree.insert(brick0);
		  assert.equal(tree.bstCount(), 1);
		});
	});

	describe('counts two bricks', function() {
    it('assert that the count of nodes for a bst with two bricks is 2', function() {
		  var brick0 = new Brick(10, "red");
		  var brick1 = new Brick(15, "green");
		  var tree = new BST();
		  tree.insert(brick0);
		  tree.insert(brick1);
		  assert.equal(tree.bstCount(), 2);
		});
  });

	describe('count several bricks', function() {
    it('assert that the count of nodes for a bst with four bricks returns 4', function() {
		  var brick0 = new Brick(50, "green");
		  var brick1 = new Brick(55, "green");
		  var brick2 = new Brick(45, "green");
		  var brick3 = new Brick(88, "green");
		  var tree = new BST();

		  tree.insert(brick0);
		  tree.insert(brick1);
		  tree.insert(brick2);
		  tree.insert(brick3);

		  assert.equal(tree.bstCount(), 4);
		});
  });

  describe('counts zero bricks', function() {
    it('assert that the count of nodes for a bst with zero bricks is 0', function() {
		  var brick0 = new Brick(10, "red");
		  var tree = new BST();

		  assert.equal(tree.bstCount(), 0);
		});
	});
});
