// find the occurrence of each element in an array by using  object
const array=[4,56,2,34,2,1,33,4,56,5]
// output: { '1': 1, '2': 2, '4': 2, '5': 1, '33': 1, '34': 1, '56': 2 }
const arr= ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// output: { apple: 3, banana: 2, orange: 1 }
const findOccurrence = (arr) => {
  const occurrenceMap = {};
  for (const num of arr) {
    if (occurrenceMap[num]) {
      occurrenceMap[num]++;
    } else {
      occurrenceMap[num] = 1;
    }
  }
  
  return occurrenceMap;
};
const occurrences = findOccurrence(array);
console.log(occurrences);