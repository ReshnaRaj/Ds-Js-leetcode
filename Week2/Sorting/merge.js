// it is the function used to split the array into one array elements
// The merge function is a recursive function that implements the Merge 
// Sort algorithm. It takes an array arr as input and recursively splits
//  it into smaller arrays until each array has only one element

function merge(arr){
    if(arr.length <2){
        return arr
    }

    // Splitting: If the input array arr has more than one element,
    //  the function calculates the middle index mid of the array 
    //  using Math.floor(arr.length/2). This will be used to split 
    //  the array into two halves - left and right.
    const mid=Math.floor(arr.length/2)
    // console.log(mid,"middle")
    const left=arr.slice(0,mid)
    // console.log(left,"left");
    const right=arr.slice(mid)
    // console.log(right,"right");
    return merged(merge(left),merge(right))
}

function merged(left,right){
    const sortedArr=[]
    while(left.length && right.length){
        // console.log(left.length,"left length");
        // console.log(right.length,"right length");
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
            // console.log(sortedArr,"left sorted array")
        }
        else{
            sortedArr.push(right.shift())
            // console.log(sortedArr,"right sorted array")
        }
    }
    return [...sortedArr,...left,...right]
}

const arr=[8,20,-2,4,-6]
console.log(merge(arr));