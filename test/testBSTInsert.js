var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('testBST', function() {
  describe('root test', function() {
    it('assert brick0 is inserted as root node', function() {
      var brick0 = new Brick(1, "red");
      var tree = new BST();
      tree.insert(brick0);
      assert.equal(tree.root.data, brick0);
    });

    it('assert brick0 left is null', function() {
      var brick0 = new Brick(1, "red");
      var tree = new BST();
      tree.insert(brick0);
      assert.equal(tree.root.left, null);
    });

    it('assert brick0 right is null', function() {
      var brick0 = new Brick(1, "red");
      var tree = new BST();
      tree.insert(brick0);
      assert.equal(tree.root.right, null);
    });

    it('assert brick0 right and left are null', function() {
      var brick0 = new Brick(1, "red");
      var tree = new BST();
      tree.insert(brick0);
      assert.equal(tree.root.right, null);
      assert.equal(tree.root.left, null);
    });
  });

  describe('test branching behaviour', function() {
    it('assert two bricks with sizes of 10 and 20 inserted into tree will result in 20 as the root and 10 as the left child', function() {
      var brick0 = new Brick(20, "pink");
      var brick1 = new Brick(10, "orange");
      var tree = new BST();
      tree.insert(brick0);
      tree.insert(brick1);
      assert.equal(tree.root.left.data, brick1);
    });

    it('assert four bricks with sizes of 10, 20, 30 and 40 inserted into tree will result in 30 as the root and 10 as the left most child', function() {
      var brick0 = new Brick(30, "pink");
      var brick1 = new Brick(10, "orange");
      var brick2 = new Brick(40, "lavender");
      var brick3 = new Brick(20, "yellow");
      var tree = new BST();
      tree.insert(brick0);
      tree.insert(brick1);
      tree.insert(brick2);
      tree.insert(brick3);
      assert.equal(tree.root.left.data, brick1);
    });

    it('assert four bricks with sizes of 10, 20, 30 and 40 inserted into tree will result in 30 as the root and 10 as the left most child', function() {
      var brick0 = new Brick(41, "pink");
      var brick1 = new Brick(50, "orange");
      var brick2 = new Brick(27, "lavender");
      var brick3 = new Brick(36, "yellow");
      var brick4 = new Brick(45, "black");
      var brick5 = new Brick(77, "blue");
      var tree = new BST();
      tree.insert(brick0);
      tree.insert(brick1);
      tree.insert(brick2);
      tree.insert(brick3);
      tree.insert(brick4);
      tree.insert(brick5);
      assert.equal(tree.root.left.data, brick2);
      assert.equal(tree.root.right.left.data, brick4);
      assert.equal(tree.root.right.right.data, brick5);
    });


  });
});
