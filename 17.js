function duplicateZeros(arr) {
    const n = arr.length;
    let i = 0;
    
    while (i < n) {
      if (arr[i] === 0) {
        // Shifting elements to the right
        for (let j = n - 1; j > i; j--) {
          arr[j] = arr[j - 1];
        }
        
        // Duplicating the zero
        i += 2; // Skip the duplicated zero
      } else {
        i++; // Move to the next element
      }
    }
  }
  
  // Example usage:
  const arr = [1, 0, 2, 3, 0, 4, 5, 0];
  console.log("Before:", arr); // Output: [1, 0, 2, 3, 0, 4, 5, 0]
  
  duplicateZeros(arr);
  console.log("After:", arr); // Output: [1, 0, 0, 2, 3, 0, 0, 4]
  