// finding a specific value from the array
function remove(arr,num){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            return true
        }
    }
   return false

}

console.log(remove([2,3,4,5],12))