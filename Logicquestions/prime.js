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

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getPrimes(arr) {
//   const primeArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let flag = 0;
//     if (arr[i] <= 1) continue; // skip 1 and below

//     for (let j = 2; j < arr[i]; j++) {
//       if (arr[i] % j === 0) {
//         flag = 1;
//         break;
//       }
//     }

//     if (flag === 0) {
//       primeArr.push(arr[i]); // store the prime
//     }
//   }

//   return primeArr;
// }

// const result = getPrimes(arr);
// console.log(result); // [2, 3, 5, 7]

