function traverseArray(arr, index) {
    // Base case: if index is equal to the array length, we have reached the end
    if (index === arr.length) {
      return;
    }
  
    // Recursive case:
    // Output the element at the current index
    console.log(arr[index]);
    // Recursively traverse the next element in the array
    traverseArray(arr, index + 1);
  }
  const arr = [1, 2, 3, 4, 5];
  traverseArray(arr,0); // Output: 1 2 3 4 5
    