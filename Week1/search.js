const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const searchValue = 5;

const index = arr.indexOf(searchValue);

if (index == -1) {
//   console.log(`The index of ${searchValue} is ${index}`);
console.log(`${searchValue} element not  is found`);
} else {
  console.log(`${searchValue}  found in array`);
}
