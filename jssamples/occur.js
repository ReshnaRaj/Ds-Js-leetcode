const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

const occurrenceCount = input.flat().reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc; // Return the accumulator in each iteration
}, {});

console.log(occurrenceCount);
output
-----------------------------
{ a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 }
