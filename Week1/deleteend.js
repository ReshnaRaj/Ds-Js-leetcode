function deleteLastElement(array) {
    let newArray = [];
    for (let i = 0; i < array.length-1; i++) {
      newArray[i] = array[i];
    }
    return newArray;
  }
  let array = [1, 2, 3, 4, 5];
  
  array = deleteLastElement(array);
  console.log(array); // Output: [1, 2, 3, 4]
    