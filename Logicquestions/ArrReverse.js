// const array=[45,6,7,72,5]
// let result=[]
// for(let i=array.length-1;i>=0;i--){
    
//     result[result.length]=array[i]
// }
// console.log(result)
// reverse the array by using recursion
// function recursiveArrayTraversal(arr, index = arr.length-1) {
//     // Base case: If the index is equal to the array length, stop recursion.
//       if (index < 0) return;
  
//     // Process the current element (in this case, we're just logging it).
//     console.log(arr[index]);
  
//     // Call the function recursively for the next index.
//     recursiveArrayTraversal(arr, index - 1);
//   }
  
//   const myArray = [1, 2, 3, 4, 5];
//   recursiveArrayTraversal(myArray);
function reverseArray(arr,index=arr.length-1,result=[]){
    if(index<0) return result
    result[result.length]=arr[index]
    return reverseArray(arr,index-1,result)
}
const myArray = [1, 2, 3, 4, 5];
const reverse=reverseArray(myArray)
console.log(reverse)