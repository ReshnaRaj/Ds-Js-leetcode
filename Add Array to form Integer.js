// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.


function addToArrayForm(num, k) {
 
  const numAsBigInt = BigInt(num.join(''));
 
  const sum = numAsBigInt + BigInt(k);

 
  const result = sum.toString().split('').map(Number);

  return result;
}


const num = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3];
const k = 516;
const output = addToArrayForm(num, k);
console.log(output); // Output: [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 8, 2, 2, 0, 6, 0, 6, 3]
