const arr = [1, 4, 7, 8, 9, 10, 3, 5];
// const result=[]

// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] % 2 !== 0) {
     
//     result[result.length]=arr[i]
//   }
// }
// console.log(result)
function printOddReverse(arr, index) {
  if (index < 0) return; // base case

  if (arr[index] % 2 !== 0) {
    console.log(arr[index]);
  }

  printOddReverse(arr, index - 1); // move to previous index
}

const array = [1, 2, 3, 4, 5, 6, 7];
printOddReverse(array, array.length - 1);

