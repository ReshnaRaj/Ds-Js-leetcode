class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a node at the beginning of the list
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  insertspecific(data,index){
    const node=new Node(data)
    let prev=this.head
    for(let i=0;i<index-1;i++){
        prev=prev.next
    }
    node.next=prev.next
    prev.next=node
}
  // Insert a node at the end of the list
  insertAtEnd(data) {
    const newNode = new Node(data);



    
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  removeatbegin() {
    if (!this.head) {
      console.log("List is empty. Nothing to remove.");
      return;
    }
  
    this.head = this.head.next;
    // If you are maintaining a size property, decrement it here.
    // this.size--;
  }
  removeLast() {
    if (!this.head) {
      console.log("List is empty. Nothing to remove.");
      return;
    }
  
    if (!this.head.next) {
      // If there's only one node in the list, set head to null
      this.head = null;
      return;
    }
  
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    // After the loop, current points to the second-to-last node
    current.next = null;
    // If you are maintaining a size property, decrement it here.
    // this.size--;
  }

  
  // Print the linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList();

linkedList.insertAtBeginning(3);
linkedList.insertAtBeginning(2);
linkedList.insertAtBeginning(1);

linkedList.insertAtEnd(4);
linkedList.insertAtEnd(5);
linkedList.print()
// console.log("inserting at specified position")
// linkedList.insertspecific(10,3)
// linkedList.removeatbegin()
linkedList.removeLast()
console.log("after removing at end")
linkedList.print();
