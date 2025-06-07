// find the largest even number from the array
let max = -Infinity;
let arr = [23, 4, 5, 6, 78, 9, 56];
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
 
  if (num % 2 == 0 && num > max) {
    max = num;
    
  }
  
}
if(max!==-Infinity){
    console.log("max value",max)
  }
  else{
    console.log("no even numbers")
  }
