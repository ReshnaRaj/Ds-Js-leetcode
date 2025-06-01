// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
var findKthPositive = function(arr, k) {
    let count = 0;
 for (item of arr) {
   if (item <= k + count) {
     count++;
   }
 }
 return k + count;
};
console.log(findKthPositive([2,3,4,7,11],5))
