function quick(arr){
    const len=arr.length
    if(len<=1){
        return arr
    }
    let pivot=arr[len-1]
    let left=[]
    let right=[]
    for(let i=0;i<len-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}
const array=[2,3,4,5,1,7,-2]
console.log(quick(array))