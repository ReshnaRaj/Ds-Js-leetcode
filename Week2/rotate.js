const array = [1, 2, 3, 4, 5];
console.log(array,"before rotation");
const rotations = 1;// number of right rotations
const len=array.length 
const lastItem = array[len - 1];

for (let i = 0; i < rotations; i++) {
  
  for (let j = len- 1; j > 0; j--) {
  
    array[j] = array[j - 1];
   
   console.log(array)

  }
  array[0] = lastItem;
}

console.log(array);

// ---------- Working-------------------
// i=0,i<2,condition true then assign lastItem=array[len-1] 
// that is lastItem=5
