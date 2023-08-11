function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      let found = false;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        return false;
      }
    }
  
    return true;
  }
  
  const array1 = [1, 2, 3, 4];
  const array2 = [3, 2, 1, 4];
  const array3 = [1, 2, 3, 5];
  
  console.log(arraysEqual(array1, array2)); // Output: true
  console.log(arraysEqual(array1, array3)); // Output: false
// from this code if any one the element is not present in the array it will return false  