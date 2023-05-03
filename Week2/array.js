function  sumEvenNumbers(array){
    let sum=0

    for(i=0;i<array.length;i++){
        
        if(array[i]%2===0){
            sum+=array[i]
            
        }
        
    }
    return sum

}
const array = [4,2,6,2];
const sumOfEvens = sumEvenNumbers(array);
console.log(sumOfEvens); // Output: 12
