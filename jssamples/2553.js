// 2553. Separate the Digits in an Array
// --------------------------------------------
var separateDigits = function(nums) {
    let output = nums
  .map(num => num.toString().split('')) // Convert each number to string and split into digits
  .flat() // Flatten the array
  .map(Number); 
   return output;
};


// Input: nums = [13,25,83,77]
// Output: [1,3,2,5,8,3,7,7]
// Explanation: 
// - The separation of 13 is [1,3].
// - The separation of 25 is [2,5].
// - The separation of 83 is [8,3].
// - The separation of 77 is [7,7].
// answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.
// Example 2:

// Input: nums = [7,1,3,9]
// Output: [7,1,3,9]
// Explanation: The separation of each integer in nums is itself.
// answer = [7,1,3,9].
