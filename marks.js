const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];

const h=students.map(st => st.scores)
const sumOfScores = h.map(scores => scores.reduce((acc, curr) => acc + curr, 0));
console.log(h)
console.log( sumOfScores)
  output
    ----------------------------------------

 [ [ 90, 85, 92 ], [ 75, 80, 85 ], [ 90, 95, 85 ], [ 100, 100, 100 ] ]
[ 267, 240, 270, 300 ]
