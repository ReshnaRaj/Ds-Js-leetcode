const arr = [{ af: [2, 3, 4] }, { af: [6, 7, 9] }, { af: [8, 11, 14] }];

let max=-Infinity
let sum=0
for(let i=0;i<arr.length;i++){
    const subArray=arr[i].af
    for(let i=0;i<subArray.length;i++){
        sum=sum+subArray[i]
        if(subArray[i]>max){
            max=subArray[i]
        }

    }
}
console.log(max)
console.log(sum)
