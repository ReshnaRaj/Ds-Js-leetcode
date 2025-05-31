merging two sorted array by using for loop 
function merge(array1,array2){
let mergedArray=[]
for(let i=0;i<array1.length;i++)
{
mergedArray[i]=array1[i]
}
for(let i=0;i<array2.length;i++){
mergedArray[array1.length+i]=array2[i]
}
return mergedArray
}
console.log(merge([1,2,3],[4,5,6]))
// linear complexity
function merge(array1,array2){
let mergedArray=array1
 
let n=mergedArray.length
for(let i=0;i<array2.length;i++)
{
mergedArray[n+i]=array2[i]
}
return mergedArray
}
console.log(merge([1,2,3,3],[4,5,6,7]))
