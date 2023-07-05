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
