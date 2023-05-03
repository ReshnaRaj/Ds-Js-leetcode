function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Swap adjacent elements if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArr = bubbleSort(arr);

console.log(sortedArr); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
