class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
//   creating new node
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  
//   node1.next = node2;
  node2.next = node3;
console.log(node1.value);  
console.log(node2);
console.log(node3.value);  