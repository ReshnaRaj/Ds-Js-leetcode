class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryStree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newnode = new Node(value);
    if (this.root == null) {
      this.root = newnode;
    } else {
      this.insertnode(this.root, newnode);
    }
  }
  insertnode(root, newnode) {
    if (newnode.value < root.value) {
      if (!root.left) {
        root.left = newnode;
      } else {
        this.insertnode(root.left, newnode);
      }
    } else {
      if (!root.right) {
        root.right = newnode;
      } else {
        this.insertnode(root.right, newnode);
      }
    }
  }
  Inorder(root) {
    if (root) {
      this.Inorder(root.left);
      console.log(root.value);
      this.Inorder(root.right);
    }
  }
  findSum() {
    let sum = 0;

    function Inorder(root) {
      if (!root) return;
      Inorder(root.left);
      sum += root.value; // Add the current node's value to the sum
      Inorder(root.right);
    }

    Inorder(this.root);
    return sum;
  }
  valid() {
    let value = [];
    this.Inorder(this.root, value);
    for (let i = 1; i < value.length; i++) {
      if (value[i] <= value[i - 1]) {
        return false;
      }
    }
    return true;
  }
}
const bst = new BinaryStree();
bst.insert(13);
bst.insert(4);
bst.insert(5);
bst.Inorder(bst.root);
console.log("Is Bst is valid", bst.valid());

const sum = bst.findSum();
console.log("Sum of elements:", sum);
