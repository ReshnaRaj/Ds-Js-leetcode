function merge(arr){
    const len=arr.length
    if(arr.length<2){
        return arr
    }
    const mid=Math.floor(len/2)
    const left=arr.slice(0,mid)
    const right=arr.slice(mid)
    return sortedArr(merge(left),merge(right))
}

function sortedArr(left,right){
    const newsort=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            newsort.push(left.shift())
        }
        else{
            newsort.push(right.shift())
        }
        
    }
    return [...newsort,...left,...right]
}

const arr=[4,-2,56,3,0]
console.log(merge(arr));