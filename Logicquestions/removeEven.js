// how to remove even numbers in the array
// function removeEven(arr){
//     let finalArray=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             finalArray[finalArray.length]=arr[i]
//         }
//     }
//     return finalArray
// }
// console.log(removeEven([45,6,2,43,6,7,8,90]))
// find duplicates from the array and remove the even duplicates
const array1=[1,2,3,4,5,1,2,3,4,6,7,7,8,8,8,8]
let result=[]
for(let i=0;i<array1.length;i++){
    let count=0
    for(let j=i+1;j<array1.length;j++){
        if(array1[i]===array1[j]){
            array1[j]=null
            count++
          
        }
    }
        if(count>=1 && array1[i] !== null&&array1[i]%2!=0){
        // console.log(array1[i])
        result[result.length]=array1[i]
        }
    
}
console.log(result)