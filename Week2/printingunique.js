// in this code return only the unique element if it having more unique elements it will return the sum so this is not proper way
function findSingleNumber(nums) {
    let result = 0;
  
    for (let i = 0; i < nums.length; i++) {
      result ^= nums[i]; 
    }
  
    return result; 
  }
  
console.log(findSingleNumber([1,2,2,3,1],"first method"))
// it returning the whole array means skipping the duplicate elements
function finsSingle(nums){
    return [...new Set(nums)]
}
console.log(finsSingle([1,2,2,3],"second method"))
let arr = [1, 2, 3, 4, 1, 2, 5, 6, 3, 7, 8, 5];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr,"third method"); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
