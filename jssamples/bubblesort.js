function bubble(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]<array[j+1]){
            console.log(array)
                let temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp
            }
        }
       
    }
    return array
}
console.log(bubble([1,11,34,4]))