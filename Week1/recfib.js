function recurfib(num){
    if(num<2){
        return num
    }
     return recurfib(num-1)+recurfib(num-2)
}
console.log(recurfib(4)) 
  // 3 output  
// series of fibannoccii
function fibonacciRecursive(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    // Recursive step: calculate the last two Fibonacci numbers and add the new one to the series.
    const series = fibonacciRecursive(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
}
const numberOfTerms = 4; // Change this value to get more or fewer terms in the series.

const fibonacciSeries = fibonacciRecursive(numberOfTerms);
console.log("Fibonacci Series:", fibonacciSeries);

