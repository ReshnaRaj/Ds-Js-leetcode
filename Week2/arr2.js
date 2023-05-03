function mergeArrays(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2];
    let uniqueArray = [...new Set(mergedArray)];
    return uniqueArray;
  }
  let array1 = [1, 2, 3,5,7,9];
  let array2 = [2, 3, 4];
  let mergedAndUniqueArray = mergeArrays(array1, array2);
  console.log(mergedAndUniqueArray); // Output: [1, 2, 3, 4]
    