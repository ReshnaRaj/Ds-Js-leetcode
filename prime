const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const primeNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    primeNumbers[primeNumbers.length] = numbers[i];
  }
}

console.log(primeNumbers);
