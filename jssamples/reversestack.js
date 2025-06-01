function reverseStringUsingStack(inputString) {
    // Create an empty stack using an array.
    const stack = [];
  
    // Push each character of the input string onto the stack.
    for (let i = 0; i < inputString.length; i++) {
      stack.push(inputString[i]);
    }
  
    // Pop characters from the stack to build the reversed string.
    let reversedString = '';
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }
  
  // Example usage:
  const input = "Hello, World!";
  const reversed = reverseStringUsingStack(input);
  console.log(reversed); // Outputs: "!dlroW ,olleH"
  