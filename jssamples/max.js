function findMaxCounts(array) {
  let positiveCount = 0;
  let negativeCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveCount++;
    } else if (array[i] < 0) {
      negativeCount++;
    }
  }

  return {
    positiveCount,
    negativeCount,
  };
}
const numbers = [3, -2, 0, -5, 7, 1, -8, 4, -9, 2];
const maxCounts = findMaxCounts(numbers);

console.log(maxCounts);
