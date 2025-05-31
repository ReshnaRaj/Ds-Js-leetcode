// // move all zero to first of the array

// var array = [1, 2, 3, 4, 0, 0, 2, 0];
// var resultArray = [];
// var length = array.length;
// var zeroCount = 0;

// // inserting all zeros
// for (i = 0; i < length; i++) {
//   if (array[i] === 0) {
//     resultArray[resultArray.length] = array[i];
//     zeroCount++;
//   }
// }

// /// inserting other numbers
// for (i = 0; i < length; i++) {
//   if (array[i] !== 0) {
//     resultArray[resultArray.length] = array[i];
//   }
// }

// console.log("Zero Count:", zeroCount);
// console.log(resultArray)

// // move all zero to end of the array
// let array = [0,0,0,0,2, 3, 4, 0, 0, 0, 0];

// let i = 0; // Pointer for non-zero elements
// let j = array.length - 1; // Pointer for zero elements
// let zeroCount = 0;

// while (i <= j) {
//   if (array[j] === 0) {
//     j--;
//     zeroCount++;
//   } else if (array[i] === 0) {
//     // Swap non-zero element with zero element
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     i++;
//     j--;
//     zeroCount++;
//   } else {
//     i++;
//   }
// }
// console.log(array);
// console.log("Zero Count:", zeroCount);

// deploy from first method making the zeros at end position
// var array = [1, 2, 3, 4, 0, 0, 2, 0];
// var resultArray = [];
// var length = array.length;
// var zeroCount = 0;

// for (i = 0; i < length; i++) {
//   if (array[i] !== 0) {
//     resultArray[resultArray.length] = array[i];
//   }
// }
// // inserting all zeros
// for (i = 0; i < length; i++) {
//   if (array[i] === 0) {
//     resultArray[resultArray.length] = array[i];
//     zeroCount++;
//   }
// }

// /// inserting other numbers
// console.log("Zero Count:", zeroCount);
// console.log(resultArray)
