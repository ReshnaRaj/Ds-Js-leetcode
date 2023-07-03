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