function maximizeSum(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  
  let sum = nums[nums.length - 1];
  for (let i = 1; i < k; i++) {
    nums[nums.length - 1]++;
    sum += nums[nums.length - 1];
  }
  
  return sum;
}

console.log(maximizeSum([1, 2, 3, 4, 5], 3));
