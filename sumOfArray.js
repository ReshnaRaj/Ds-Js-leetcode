function recursion(n){
    if(n==13){
        return ;
    }
    console.log(n)
    recursion (n+1)
}
recursion(10)
 function count(n){
     for(let i=n;i<=13;i++){
         console.log(i)
     }
 }
 count(10)
//  normal function with for loop

// sum of array by using recursion
function sumRecursive(arr, index = 0) {
    if (index === arr.length) {
      return 0; // Base case: end of array reached
    } else {
      return arr[index] + sumRecursive(arr, index + 1);
    }
  }
  
  console.log(sumRecursive([1, 2, 3]));
// find the sum of array by using reduce
  function sum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  console.log(sum([1, 2, 3])); // Output: 6

  // sum of first consecutive number 
  // normal method 
   function sum(arr){
     let sum=0
     for(let i=1;i<=arr;i++){
         sum+=i
     }
     return sum
 }
 console.log(sum(4))

//  by recusrion
function sumRecursive(arr, index = 1) {
  if (index> arr) {
    return 0; // Base case: current exceeds target
  } else {
    return index + sumRecursive(arr, index + 1);
  }
}

console.log(sumRecursive(4));
  
  