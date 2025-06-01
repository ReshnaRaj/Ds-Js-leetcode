function quicksort(array){
    let len=array.length
    if(len<=1){
        return array
    }
    let pivot=array[len-1]
    let left=[]
    let right=[]
    for(let i=0;i<len-1;i++){
        if(array[i]<pivot){
            left.push(array[i])
        }
        else{
            right.push(array[i])
        }
       
    }
    return [...quicksort(left),pivot,...quicksort(right)]

}
console.log(quicksort([45,6,2,22,9]))