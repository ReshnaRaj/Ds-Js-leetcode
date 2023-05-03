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