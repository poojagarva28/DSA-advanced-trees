class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

let v;

function getNode(value) {
  let newNode = new Node(value);
  return newNode;
}

function countSumX(root, x) {
  if (root === null) return 0;
  let ls = countSumX(root.left, x);
  let rs = countSumX(root.right, x);
  let sum = ls + rs + root.value;

  if (sum === x) v++;

  return sum;
}

function countSum(root, x) {
  if (root === null) return 0;
  v = 0;
  let ls = countSumX(root.left, x);
  let rs = countSumX(root.right, x);
  if (ls + rs + root.value === x) v++;
  return v;
}

let root = getNode(1);
root.left = getNode(2);
root.right = getNode(3);
root.left.left = getNode(5);
root.left.right = getNode(8);
root.right.left = getNode(4);
root.right.right = getNode(9);

let x = 5;

console.log(`Count : ${countSum(root, x)}`);
