
let array=[1,2,3,4,5,6]
 
 
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
      if (array[i] > max) {
        max = array[i];
      }
    }

console.log(min,max)

 
 
 
 
 