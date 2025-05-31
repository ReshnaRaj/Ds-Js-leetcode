var numberToWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred"
};

function convert(number) {
  if (number in numberToWords) return numberToWords[number];

  let words = "";

  if (number >= 100) {
    words = words + convert(Math.floor(number / 100)) + " hundred";
    number = number % 100;
  }

  if (number >= 20) {
    if (words !== "") words += " and ";
    words = words + convert(Math.floor(number / 10) * 10);
    number = number % 10;

    if (number > 0) {
      words += "-" + convert(number);
    }
  }

  return words;
}

console.log(convert(345)); // Output: three hundred and forty-five
console.log(convert(23)); // Output: twenty-three
console.log(convert(7)); // Output: seven
