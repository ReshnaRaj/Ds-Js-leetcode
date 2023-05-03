function insertElement(array, index, element) {
    // Create a new array with the same length as the original array
    const newArray = [];
  
    // Copy the elements from the original array up to the insertion point
    for (let i = 0; i < index; i++) {
      newArray[i] = array[i];
    }
  
    // Add the new element to the new array
    newArray[index] = element;
  
  
    // Copy the remaining elements from the original array
    for (let i = index; i < array.length; i++) {
      
      
      newArray[i + 1] = array[i];
    }
  
    return newArray;
  }
const array=[1, 2, 3, 4, 5]
const newArray = insertElement(array,4, 10);
console.log(newArray); // Output: [1, 2, 10, 3, 4, 5]
// O(n)S and O(n)T it taking space for to inserting a new elemnt bcz the elememt is not removing

  