function checkNonDecreasing(nums) {
    let count = 0; // Number of modifications made
    
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        console.log(nums[i],"first element")
        if (count === 1) {
          return false; // More than one modification needed
        }
        
        if (i >= 2 && nums[i] < nums[i - 2]) {
          // Current element is too small, modify it
          nums[i] = nums[i - 1];
        } else {
          // Previous element is too large, modify it
          nums[i - 1] = nums[i];
        }
        
        count++;
      }
    }
    
    return true;
  }
  
  // Example usage:
  const nums = [4, 2, 3];
  console.log(checkNonDecreasing(nums)); // Output: true
  
  // const nums2 = [4, 2, 1];
  // console.log(checkNonDecreasing(nums2)); // Output: false
  