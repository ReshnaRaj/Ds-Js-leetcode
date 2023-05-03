// removing a specific value from the array
function remove(arr,num){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==num){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(remove([2,3,4,5],4))
  