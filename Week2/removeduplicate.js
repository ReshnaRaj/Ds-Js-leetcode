// const arr = [1,1, 2, 3, 45, 2, 4, 2, 5, 6, 1, 4];
// let n = arr.length;

// for (let i = 0; i < n; i++) {
//   for (let j = i + 1; j < n;) {
//     arr[i] === arr[j] ? (arr.splice(j, 1), n--) : j++;
//   }
// }

// for (let i = 0; i < n; i++) {
//   console.log(arr[i]);
// }

function removeDuplicates(nums) {
    const array = [];
    for (let i = 0; i < nums.length; i++) {
      if (!array.includes(nums[i])) {
        array.push(nums[i]);
      }
    }
    return array;
  };
  
  console.log(removeDuplicates([1,1, 2, 3, 1]));
  

  
  
