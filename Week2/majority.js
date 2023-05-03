function majorityElement(nums) {
    let candidate = nums[0];
    let count = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
        
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        }
    }
    
    return candidate;
}
console.log(majorityElement([1,2,3,4,2,2]))