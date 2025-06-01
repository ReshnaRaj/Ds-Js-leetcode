let num = 153;
let originalNum = num;
let sum = 0;

while (num !== 0) {
  let digit = num % 10;
  sum += digit*digit*digit;
  num = Math.floor(num / 10);
}

if (sum === originalNum) {
  console.log(`${originalNum} is an Armstrong number.`);
} else {
  console.log(`${originalNum} is not an Armstrong number.`);
}
