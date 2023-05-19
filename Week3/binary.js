class Node {
    constructor(data) {
      this.left = null;
      this.right = null;
      this.data = data;
    }
  }
  
  function insert(root, data) {
    if (!root) {
      root = new Node(data);
    } else if (data < root.data) {
      if (!root.left) {
        root.left = new Node(data);
      } else {
        insert(root.left, data);
      }
    } else {
      if (!root.right) {
        root.right = new Node(data);
      } else {
        insert(root.right, data);
      }
    }
    return root;
  }
  console.log(insert(3));
  console.log(insert(34));