
var numbers = [1, 2, 3, 2, 4,1,5, 3, 4, 6, 2,1,1,1];
// var frequency = [];

// for (var i = 0; i < numbers.length; i++) {
//   var num = numbers[i]
 
//   if (frequency[num]) {
//     frequency[num]++;
   
    
//   } else {
//     frequency[num] = 1;
//   }
// }
// for (var key in frequency) {
//   console.log(key + ' occurs ' + frequency[key] + ' time');
// }
 
const arr = [1, 2, 3, 2, 1, 3, 4, 3, 2,5];
const frequency = {};
const result=[]

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  if (frequency[num]) {
    frequency[num]++;
  } else {
    
    frequency[num] = 1;
     

  }
}
for (let key in frequency) {
  if (frequency[key] === 1) {
    result[result.length]=Number(key);  
  }
}

console.log(frequency);
console.log(result)
