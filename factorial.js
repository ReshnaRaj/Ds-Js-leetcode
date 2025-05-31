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

 
const result = factorial(-5);
console.log(result);
