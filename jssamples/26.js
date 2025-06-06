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
console.log(findKthPositive([2,3,4,7,11],7))
// find the missing k-th positive integer within the range of the given array
function findKthMissingWithinArray(arr, k) {
    let missing = [];
    let i = 0;
    for (let num = 1; num < arr[arr.length - 1]; num++) {
        if (arr[i] === num) {
            i++;
        } else {
            missing.push(num);
            if (missing.length === k) {
                return num; // k-th missing found
            }
        }
    }
    return null; // Less than k missing numbers within the array's range
}

console.log(findKthMissingWithinArray([2, 3, 4, 7, 11], 7)); // Output: null
console.log(findKthMissingWithinArray([2, 3, 4, 7, 11], 3)); // Output: 6
console.log(findKthMissingWithinArray([1, 2, 3, 4], 1));     // Output: null

