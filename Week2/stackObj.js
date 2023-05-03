class Stack {
    constructor() {
      this.stack = {};
      this.length = 0;
    }
  
    push(data) {
      this.stack[this.length] = data;
      this.length++;
    }
  
    pop() {
      if (this.length === 0) {
        return null;
      }
      const poppedValue = this.stack[this.length - 1];
      delete this.stack[this.length - 1];
      this.length--;
      return poppedValue;
    }
  
    peek() {
      if (this.length === 0) {
        return null;
      }
      return this.stack[this.length - 1];
    }
  
    isEmpty() {
      return this.length === 0;
    }
  
    size() {
      return this.length;
    }
  }
  
  // Example usage:
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.peek()); // Output: 3
  console.log(stack.pop()); // Output: 3
  console.log(stack.pop()); // Output: 2
  console.log(stack.size()); // Output: 1
  console.log(stack.isEmpty()); // Output: false
  