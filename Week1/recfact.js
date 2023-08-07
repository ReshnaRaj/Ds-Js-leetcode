function factorial(n) {
    if (n === 0) {   // base case
      return 1;
    } else {
      return n * factorial(n - 1);   // recursive case
    }
  }
  const result = factorial(5);
  console.log(result);   // Output: 120
  
// console.log(factorial(5))  


// normal case
function factorial(number) {
    if (number < 0) {
      return 'Error! Factorial for negative number does not exist.';
    } else if (number === 0) {
      return `The factorial of ${number} is 1.`;
    } else {
      let fact = 1;
      for (let i = 1; i <= number; i++) {
        fact *= i;
      }
      return `The factorial of ${number} is ${fact}.`;
    }
  }
  
   
  const result = factorial(6);
  console.log(result);
  
