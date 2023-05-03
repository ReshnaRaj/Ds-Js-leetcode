function fibonacci(n) {
    if (n <= 1) {   // base case
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);   // recursive case
    }
  }
  const result = fibonacci(3);
  console.log(result);   // Output: 13
    