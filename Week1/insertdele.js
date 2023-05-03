function insertElement(arr, index, element) {
    const newArr = [];
  
    // Copy the elements from the old array up to the insertion point
    for (let i = 0; i < index; i++) {
      newArr[i] = arr[i];
    }
  
    // Add the new element to the new array
    newArr[index] = element;
  
    // Copy the remaining elements from the old array
    for (let i = index + 1; i < arr.length; i++) {
      newArr[i] = arr[i];
    }
  
    return newArr;
  }

  
console.log(insertElement([1,2,3,4,5,6],2,2.5));

// O(n)T O(1)S actually ir removing the elemenr from the array
// O(n)S and O(n)T it taking space for to inserting a new elemnt bcz the elememt is not removing
  

  