function deleteElement(array, index) {
    for (let i = index; i < array.length; i++) {
      array[i] = array[i + 1];
    }
    array.length--;
  }
  let array = [1, 2, 3, 4, 5];
  deleteElement(array, 2);
  console.log(array); // Output: [1, 2, 4, 5]
    



const array1=[1,2,3,4,5,6]
// array.pop()
array1.shift()
console.log(array1);