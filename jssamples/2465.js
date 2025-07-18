 
// var distinctAverages = function (nums) {
//     const array = nums.sort((a, b) => a - b)
//     let length = array.length
//     let avg = 0
//     let result = []
//     while (length > 0) {
//         avg = Math.floor((array[0] + array[length - 1]) / 2);
//         result.push(avg)
//         array.shift();
//         array.pop();
//         length -= 2
//     }
//     let uniqueAvgs = new Set(result);
//     return uniqueAvgs.size;
// };

// example
// ----------------------------------------------------
// Input: nums = [4,1,4,0,3,5]
// Output: 2
// Explanation:
// 1. Remove 0 and 5, and the average is (0 + 5) / 2 = 2.5. Now, nums = [4,1,4,3].
// 2. Remove 1 and 4. The average is (1 + 4) / 2 = 2.5, and nums = [4,3].
// 3. Remove 3 and 4, and the average is (3 + 4) / 2 = 3.5.
// Since there are 2 distinct numbers among 2.5, 2.5, and 3.5, we return 2.
// Example 2:

// Input: nums = [1,100]
// Output: 1
// Explanation:
// There is only one average to be calculated after removing 1 and 100, so we return 1.






// Test case passed code 
// ------------------------------------------------

var distinctAverages = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array

    const n = nums.length;
    const averages = new Set();

    for (let i = 0; i < n / 2; i++) {
        let min = nums[i];
        let max = nums[n - 1 - i];

        let average = (min + max) / 2;
        averages.add(average);
    }

    return averages.size;
};
