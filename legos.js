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
};

/* Inserts a brick into the appropriate colors's BST*/
function insert(Brick) {
  this.datastore[Brick.color].insert(Brick)
}
