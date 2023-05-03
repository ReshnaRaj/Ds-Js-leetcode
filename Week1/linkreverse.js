// Define the node class
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Define the linked list class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a node to the end of the list
    add(value) {
      const node = new Node(value);
  
      if (!this.head) {
        this.head = node;
        return;
      }
  
      let curr = this.head;
  
      while (curr.next !== null) {
        curr = curr.next;
      }
  
      curr.next = node;
    }
    print(){
        
        let curr=this.head
        while(curr){
            console.log(curr.value)
            curr=curr.next
        }
    }
  
    // Reverse the linked list and print out the nodes in reverse order
    reverse()
    {
      let prev=null
      let current=this.head
      while(current)
      {
          let next=current.next
          current.next=prev
          prev=current
          current=next
          
      }
      
      this.head=prev
      
    
    }
    
  }
  
  // Create a new linked list and add some nodes
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);
  list.print()
  console.log("before reversing")
  
  // Print out the nodes in reverse order
 list.reverse();
 list.print()
  