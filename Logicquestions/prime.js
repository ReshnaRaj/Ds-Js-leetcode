// find the prime numbers from the array
const arr=[1,2,3,4,5]
 let result=[]
for(let i=0;i<arr.length;i++){
    let flag=0
   
    for(let j=2;j<arr[i];j++){
        if(arr[i]%j==0){
            flag=1
         break
        }
    }
   
    if(arr[i]>1&&flag==0){
        result[result.length]=arr[i]
        
    }
    
    
}
console.log(result)

 

