module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

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
};

function insert(Brick) {
  this.datastore[Brick.color].insert(Brick)
}
