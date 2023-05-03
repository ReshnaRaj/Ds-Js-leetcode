function linearsearch(arr,t){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==t){
            return i
        }
        
    }
    return -1
}
console.log(linearsearch([1,2,3,4,5],3));
console.log(linearsearch([1,2,3,4,5],5));
const fruits = [1,2,3,4,5];
const index = fruits.indexOf(5);
// console.log(index); // output: 2
