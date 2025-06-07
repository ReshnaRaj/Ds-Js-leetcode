// The Fibonacci series is a sequence of numbers 
// in which each number is the sum of the two preceding ones,
//  usually starting from 0 and 1.
//  find the fibonacci of 10 by using recursion
 
function fib(n){
    if(n<2) return n
    return fib(n-1)+ fib(n-2)
}
console.log(fib(3))
