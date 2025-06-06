// find the common elements in two arrays
function common(array, array1) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array1.length; j++) {
        console.log(array[i], array1[j]);
      if (array[i] === array1[j]) {
        result[result.length] = array[i];
        break;
      }
    }
  }
  return result;
}
const array = [2, 3, 4, 5];
const array1 = [4, 32, 1, 2, 3];
console.log(common(array, array1));
