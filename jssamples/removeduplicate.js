const removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
      let i = 0;
      for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
          i++;
          nums[i] = nums[j];
        }
      }
      return i + 1;
    };
    const nums = [1, 1, 2,3, 4,5, 5, 6];
    console.log(removeDuplicates(nums)); // Output: 6
    // console.log(nums);
// this is not working properly
