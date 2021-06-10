module.exports.Node = Node;
module.exports.BST = BST;

/*Creates BST nodes*/
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

/*Shows node data*/
function show() {
  return this.data;
}

/*Creates an empty binary search tree*/
function BST() {
  this.root = null;
  this.insert = insert;
  this.bstCount = bstCount;
}

/*Adds nodes based on flow of conditionals*/
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data.size < current.data.size) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      }
      else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

/*Counts and returns the number of Nodes in the BST*/
function bstCount() {
  var count = 0;
  if (this.root != null) {
    count = countSubtree(this.root);
  }
  return count;
}

/*Helper function that counts the nodes recursively */
function countSubtree(node) {
  var count = 1;
  if (node.left != null) {
    count += countSubtree(node.left);
  }
  if (node.right != null) {
    count += countSubtree(node.right);
  }
  return count;
}
