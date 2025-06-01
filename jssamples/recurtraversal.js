function recursiveArrayTraversal(arr, index = 0) {
    // Base case: If the index is equal to the array length, stop recursion.
    if (index === arr.length) {
      return;
    }
  
    // Process the current element (in this case, we're just logging it).
    console.log(arr[index]);
  
    // Call the function recursively for the next index.
    recursiveArrayTraversal(arr, index + 1);
  }
  
  const myArray = [1, 2, 3, 4, 5];
  recursiveArrayTraversal(myArray);
  