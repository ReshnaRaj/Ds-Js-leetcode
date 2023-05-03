function selectionSort(arr) {
  
    for (let i = 0; i < arr.length - 1; i++) {
      // setting the first position is minimum value 
      let minIndex = i;
  
      // Find the index of the minimum element in the remaining unsorted portion of the array
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first element of the unsorted portion
      if (minIndex !== i) {

        console.log(arr[i],"before swapping")
        console.log(arr[minIndex])
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        console.log(arr[i],"after swapping")
        console.log(arr[minIndex])
      }
    }
  
    return arr;
  }
  
  // Example usage
  let arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array:", arr);
  let sortedArr = selectionSort(arr);
  console.log("Sorted array:", sortedArr);
  