function sumOfRecursive(arr, index = 0) {
   
  if (index >= arr.length) {
    
    return 0; // base case: when index exceeds array length
  }

  const current = arr[index]
   
  return current + sumOfRecursive(arr, index + 1);
}

console.log(sumOfRecursive([3,15,2]));  