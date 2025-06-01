// common method
// --------------------------------
function pascal(number) {
  const array = [];

  for (let i = 0; i < number; i++) {
    array[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        array[i][j] = 1; // First column and diagonal elements are always 1
      } else {
        array[i][j] = array[i - 1][j - 1] + array[i - 1][j]; // Calculate other elements
      }
    }
  }

  return array;
}

console.log(pascal(5));


 
