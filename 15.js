let array = [2, 3, 4, 0, 0, 0, 0];
let rearrangedArray = [];
let zeroCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    zeroCount++;
  }
}

for (let i = 0; i < zeroCount; i++) {
  rearrangedArray[i] = 0;
}

let nonZeroIndex = zeroCount;
for (let i = 0; i < array.length; i++) {
  if (array[i] !== 0) {
    rearrangedArray[nonZeroIndex] = array[i];
    nonZeroIndex++;
  }
}

console.log(rearrangedArray);







// Normal  method
--------------------------
  var resultArray = [];
var length = array.length;

// inserting all zeros
for(i=0;i<length;i++){
    if(array[i] === 0){
        resultArray[resultArray.length] = array[i];
    }
}

/// inserting other numbers
for(i=0;i<length;i++){
    if(array[i] !== 0){
        resultArray[resultArray.length] = array[i]
    }
}


console.log(resultArray)
