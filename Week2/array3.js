// finding common elements from 2 different array

function findIntersection(arr1, arr2) {
    const intersection = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j] && !intersection.includes(arr1[i])) {
          intersection.push(arr1[i]);
        }
      }
    }
    return intersection;
  }
  const arr1 = [3,4,1, 2, 3, 4, 5,4,6];
const arr2 = [3, 4, 5, 6, 7];
const intersection = findIntersection(arr1, arr2);
console.log(intersection); // Output: [3, 4, 5]

  