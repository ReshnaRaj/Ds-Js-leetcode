function insert(arr){
    for(let i=1;i<arr.length;i++){
        let key=arr[i]
        let j=i-1
      
        while(j>=0&&arr[j]>key){
            
            arr[j+1]=arr[j]
            console.log(arr[j+1],"after swappd val");
            // console.log(j,"j decremented");
           
            j--
           
        }
        arr[j+1]=key
        console.log(arr[j+1],"j values");
    }
    return arr

}
console.log(insert([13,5,15,1]))