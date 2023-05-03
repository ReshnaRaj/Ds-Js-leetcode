function findprime(number){
    const primes=[]
    for(let i=0;i<number.length;i++){
        if(isPrime(number[i])){
            primes.push(number[i])
        }
    }
    return primes
}
function isPrime(num){
    if(num<=1)
    {
        return false
    }
    else{
        for(let i=2;i<num;i++){
            if(num%i==0){
                return false
            }
        }
    }
    return true
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,11];
const primes = findprime(numbers);

console.log(primes);
