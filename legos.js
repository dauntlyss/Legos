module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

var bst = require('./bst');
var BST = bst.BST;

function Brick(size, color) {
  this.size = size;
  this.color = color;
}

function LegoPile() {
  this.datastore = {
    "red" : new BST(),
    "green" : new BST(),
    "blue" : new BST(),
    "yellow" : new BST(),
    "black" : new BST(),
    "white" : new BST()
  };
  this.insert = insert;
  this.hasBrick = hasBrick;
  this.findBinaryTree = findBinaryTree;
  this.findBrick = findBrick;

};

/* Inserts a brick into the appropriate colors's BST*/
function insert(Brick) {
  this.datastore[Brick.color].insert(Brick)
}

/*Checks to see whether the LegoPile has a brick with the prescribed size and color*/
function hasBrick(size, color) {
  var tree = this.findBinaryTree(color);
  findBrick(size, tree);
  return findBrick(size, tree) != null;
}

function findBinaryTree(key) {
 return this.datastore[key];
}

/*Searches binary tree for size, if size is found the object with the correct size is returned, if not null is returned.*/
function findBrick(size, tree) {
  if (tree.root == null) {
    return null;
	} else {
    var current = tree.root;
    var parent;
    while (true) {

      parent = current;
      			if (size < current.data.size) {
      				current = current.left;
      				if (current == null) {
      					break;
      				}
			  } else if (size > current.data.size) {
				      current = current.right;
				          if (current == null) {
					               break;
				                   }
			} else if (size == current.data.size) {
				return current.data;
			}
    }
  }
}
