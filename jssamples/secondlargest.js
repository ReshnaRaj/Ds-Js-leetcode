function secondLargest(arr) {
    if (arr.length < 2) {
        return null; 
    }
    let first = -Infinity;
    let second = -Infinity;
    for (let i=0; i<arr.length;i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
            // console.log(`first: ${first}, second: ${second}`);
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }
    return second === -Infinity ? null : second;  
}
console.log(secondLargest([3, 1, 4, 4, 5, 2,4])); // Output: 4
// time complexity o(n)
// space complexity o(1)
// function sort(array){
//     for(let i=0;i<array.length;i++){
//         for(let j=i+1;j<array.length-1-i;j++){
//             if(array[i]>array[j]){
//                 let temp=array[i]
//                 array[i]=array[j]
//                 array[j]=temp
//             }
//         }
//     }
// }
// function secondLargest(arr) {
//     if (arr.length < 2) {
//         return null; 
//     }
//     sort(arr);
//     return arr[arr.length - 2];  
// }
// console.log(secondLargest([3, 1, 4, 40, 5, 2])); 
// time complexity o(n2)
// space complexity o(1)