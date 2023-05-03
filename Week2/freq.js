function findElementFrequency(arr) {
    let frequency = {};
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] in frequency) {
        frequency[arr[i]] += 1;
      } else {
        frequency[arr[i]] = 1;
      }
    }
    return frequency;
  }
  
  let myArray = [1, 2, 3, 2, 4, 3, 5];
  console.log(findElementFrequency(myArray)); // Output: {1: 1, 2: 2, 3: 2, 4: 1, 5: 1}
  