// Coercion in JavaScript refers to the automatic conversion of 
// one data type to another when performing operations or comparisons 
// Numeric to String Coercion
const num = 42;
const str = "The answer is: " + num; // Coerces num to a string
console.log(str); // Output: "The answer is: 42"

const strNumber = "123";
const numSum = strNumber + 5; // Coerces strNumber to a number
console.log(numSum); // Output: 128

// Boolean to Numeric Coercion
const bool = true;
const numBool = bool + 1; // Coerces bool to a number
console.log(numBool);

// Numeric to Boolean Coercion
const numericValue = 0;
const boolValue = !numericValue; // Coerces numericValue to a boolean
console.log(boolValue);

const strNum = "42";
const numValue = 42;

console.log(strNum == numValue); // Output: true (loose equality)
console.log(strNum === numValue); // Output: false (strict equality)


const arr = [1, 2, 3];
const arrStr = "Array contents: " + arr; // Coerces arr to a string
console.log(arrStr); // Output: "Array contents: 1,2,3"

console.log("1"- - "1")  
console.log("1" - - "1")

// 2 will be the output and look at the space from this example

console.log("1" - "1")
// 0
