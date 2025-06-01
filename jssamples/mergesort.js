function merged(arr){
    if(arr.length<2){
        return arr
    }
    else{
        const mid=arr.length/2
        const left=arr.slice(0,mid)
        console.log(left,"llef")
        const right=arr.slice(mid)
        console.log(right,"right")
        return mergefunction(merged(left),merged(right))
    }
    function mergefunction(left,right){
        let sortedArray=[]
        while(left.length&&right.length){
            if(left[0]<=right[0]){
                sortedArray.push(left.shift())
            }
            else{
                sortedArray.push(right.shift())
            }
        }
        return [...sortedArray,...left,...right]
    }

}
console.log(merged([3,4,5,1,-3,0,-23]))