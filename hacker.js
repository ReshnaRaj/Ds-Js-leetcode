function printDistinctPairsWithDifferenceK(numbers, k) {
    // Create a Set to store the unique elements in the array
    const uniqueNumbers = new Set(numbers);
    console.log(uniqueNumbers,"ttttt")
    
    // Create an array to store the distinct valid pairs
    const distinctPairs = [];
    
    // Iterate through the elements in the array
    for (let num of uniqueNumbers) {
        console.log(num,"pppp")
      // Calculate the potential pair (a, b)
      const a = num;
      const b = num + k;
      
      // Check if (b) exists in the Set
      if (uniqueNumbers.has(b)) {
        // Sort and store the pair as an array to ensure uniqueness
        const pair = [a, b].sort();
        distinctPairs.push(pair);
        console.log(distinctPairs,"yyyy")
      }
    }
    
    // Print the distinct valid pairs
    distinctPairs.forEach(pair => {
      console.log(`(${pair[0]}, ${pair[1]})`);
    });
  }
  
  // Example usage:
  const numbers = [1, 3, 2];
  const k = 1;
  console.log("output starts...")
  printDistinctPairsWithDifferenceK(numbers, k);
  