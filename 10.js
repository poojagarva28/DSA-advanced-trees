class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function oddNodes(root, isOdd) {
  if (root == null) return;

  if (isOdd == true) console.log(root.value + " ");

  oddNodes(root.left, !isOdd);
  oddNodes(root.right, !isOdd);
}

function newNode(value) {
  let node = new Node(value);
  return node;
}

let root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);
root.right.right = newNode(6);
oddNodes(root, true);
