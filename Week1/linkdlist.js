class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      // sets the next property of the 
      // new node to the current head node of the linked list.

      this.head = newNode;
      // sets the head of the linked list to the 
      // newly created node, effectively making it the 
      // new first node in the list.
    }
  }
  
  // Create a new linked list
  const myList = new LinkedList();
  
  // Add nodes to the beginning of the list
  myList.prepend(3);
  myList.prepend(2);
  myList.prepend(1);
  
  // Log the values of the nodes in the list
  let currentNode = myList.head;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  