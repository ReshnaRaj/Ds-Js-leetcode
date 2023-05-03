function quick(array){
    let len=array.length
    if(len<2){
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
    return [...quick(left),pivot,...quick(right)]
}
const array1=[83,-4,4,1,-34]
console.log(quick(array1));