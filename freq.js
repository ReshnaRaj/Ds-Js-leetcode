
var numbers = [1, 2, 3, 2, 4,1,5, 3, 4, 6, 2,1,1,1];
var frequency = [];

for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i]
 
  if (frequency[num]) {
    frequency[num]++;
   
    console.log(frequency[num],"frequency")
  } else {
    frequency[num] = 1;
  }
}
for (var key in frequency) {
  console.log(key + ' occurs ' + frequency[key] + ' time(s)');
}