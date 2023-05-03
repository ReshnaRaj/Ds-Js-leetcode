var canThreePartsEqualSum = function(arr) {
    let sum=0;
    let tmp=0;
    let count=0;

    for (let i=0; i<arr.length;i++) {
        sum+=arr[i];
    }

     sum=sum/3;

     for (let i=0; i<arr.length;i++) {
        tmp+=arr[i];
       
       
        
         if (tmp==sum ) 
         {
            count++; 
            tmp=0;
        }        
    }
    
return count>=3;
};
console.log(canThreePartsEqualSum([4,4,4]))