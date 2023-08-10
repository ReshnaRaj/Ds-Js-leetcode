function uniqueArray(number){
    let unique=[]
    for(let i=0;i<number.length;i++){
        for(let j=0;j<number.length;j++){
            if(number[i]!==number[j]){
                unique.push(number[i])
            }
        }
    }
    return unique
}
console.log(uniqueArray([4,5,2,1,2,4,9]));
// while doing in programiz gt an error