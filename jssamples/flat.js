const nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, 9]];

// Flatten the array to a depth of 2
const flattenedArrayDepth2 = nestedArray.flat(2);

console.log(flattenedArrayDepth2);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


const nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, 9]];

// Flatten the array to a depth of 1 (default)
const flattenedArray = nestedArray.flat();

console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6], 7, 8, 9]
