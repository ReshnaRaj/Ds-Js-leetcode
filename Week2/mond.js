
var missingNumber = function (nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    console.log(expectedSum);
    let actualSum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      actualSum = actualSum + nums[i]
    //   console.log(actualSum);
    }
    
    return expectedSum-actualSum
  };
  console.log(missingNumber([1,2,3,4,0]))