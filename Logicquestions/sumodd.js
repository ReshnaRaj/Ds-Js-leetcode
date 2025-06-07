// function sumofOdd(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             sum+=arr[i]
//         }
//     }
//     return sum
// }
// console.log(sumofOdd([3,5,23,4]))
// recursion
function sumOfOddRecursive(arr, index = 0) {
   
  if (index >= arr.length) {
    
    return 0; // base case: when index exceeds array length
  }

  const current = arr[index] % 2 !== 0 ? arr[index] : 0;
   
  return current + sumOfOddRecursive(arr, index + 1);
}

console.log(sumOfOddRecursive([3, 5, 23, 4,51]));  
