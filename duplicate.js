find the duplicate array elements 
-------------------------------------------
const array=[1,2,3,4,5,1,2,3]
for(let i=0;i<array.length;i++){
    let count=0
    for(let j=i+1;j<array.length;j++){
        if(array[i]===array[j]){
            array[j]=null
            count++
          
        }
    }
        if(count>=1 && array[i] !== null){
        console.log(array[i])
        }
    
}

find the unique array elements
----------------------------------------
 const array=[1,2,3,4,5,1,2,3]
for(let i=0;i<array.length;i++){
    let count=0
    for(let j=i+1;j<array.length;j++){
        if(array[i]===array[j]){
            array[j]=null
            count++
          
        }
    }
        if(count==0 && array[i] !== null){
        console.log(array[i])
        }
    
}

// function based for to return the unique elements from the array
function findDuplicate(array){
    let newArray=[]
    
    for(let i=0;i<array.length;i++){
         let isUnique=true
        for(let j=0;j<array.length;j++){
            if(i!=j&&array[i]==array[j]){
                isUnique=false
            }
        }
        if(isUnique){
                newArray.push(array[i])
            }
    }
    return newArray
}
console.log(findDuplicate([4,5,6,4]))
// return the duplicate elements from the array
 

