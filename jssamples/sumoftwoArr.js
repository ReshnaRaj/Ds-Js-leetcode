function sumofTwoArr(arr1,arr2)
{
      let result=[]
if(arr1.length===arr2.length){
  
  
    for(let i=0;i<arr1.length;i++){
        result.push(arr1[i]+arr2[i])
    }
}
return result
}
const array1=[3,4,5]
const array2=[4,2,1]
console.log(sumofTwoArr(array1,array2))