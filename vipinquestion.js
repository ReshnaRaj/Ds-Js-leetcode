class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findLargestAndSecondLargestSum(root) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  // In-order traversal to collect elements in sorted order
  function inOrderTraversal(node) {
    if (node) {
      inOrderTraversal(node.left);

      if (node.value > largest) {
        secondLargest = largest;
        largest = node.value;
      } else if (node.value > secondLargest && node.value < largest) {
        secondLargest = node.value;
      }

      inOrderTraversal(node.right);
    }
  }

  inOrderTraversal(root);

  return largest + secondLargest;
}

// Create a binary tree
const root = new TreeNode(15);
root.left = new TreeNode(10);
root.right = new TreeNode(20);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(12);
root.right.left = new TreeNode(18);
root.right.right = new TreeNode(25);

const sum = findLargestAndSecondLargestSum(root);
console.log("Sum of the largest and second largest elements:", sum);
