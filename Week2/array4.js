function largest(arr){
    let large=arr[0]
    for(i=0;i<arr.length;i++){
       
        if(arr[i]>large)
        {
            large=arr[i]
        }
    }
    return large
}
console.log(largest([3,4,5,6,12]));