class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
function LeftLeavesSum(root) {
  if (root == null) return 0;
  var stack = [];
  stack.push(root);
  var sum = 0;
  while (stack.length > 0) {
    var currentNode = stack[stack.length - 1];
    stack.pop();
    if (currentNode.left != null) {
      stack.push(currentNode.left);
      if (currentNode.left.left == null && currentNode.left.right == null) {
        sum = sum + currentNode.left.key;
      }
    }
    if (currentNode.right != null) stack.push(currentNode.right);
  }
  return sum;
}

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);
root.right.right.left = new Node(6);
root.left.left = new Node(7);
root.left.right = new Node(8);
root.left.right.right = new Node(9);
console.log(`Sum of left leaves is ${LeftLeavesSum(root)}`);
