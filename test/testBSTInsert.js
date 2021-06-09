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
    })
  });
});
