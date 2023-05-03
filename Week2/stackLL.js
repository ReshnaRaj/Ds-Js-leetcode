class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        const poppedNode = this.head;
        this.head = this.head.next;
        // poppedNode.next = null;
        // this.length--;
        return poppedNode.data;
    }

    peek() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
    print() {
        let current = this.head;
        while (current) {
          console.log(current.data);
          current = current.next;
        }
      }
}

// Example usage:

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
 // Output: 3
stack.push(50);
// console.log("before popping");
stack.print()
// console.log(stack.peek(),"first val");
console.log(stack.pop()); 
console.log("after popping")
stack.print()




// console.log(stack.size(),"size of the array");
// console.log(stack.isEmpty(),"empty or not");
// console.log("after popping");
// stack.print()

