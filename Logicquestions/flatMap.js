// const arr = [[1], [2,4],[3,45]];
// const result=arr.flatMap((arr)=>arr)
// console.log(result)
// custom flatMap function 
Array.prototype.myFlatMap = function(callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    const mapped = callback(this[i], i, this);
    result = result.concat(mapped);
  }

  return result;
};
const arr =[[1],[2,4],[3,45]]

// const output = arr.myFlatMap(x => [x, x * 2]);
const output = arr.myFlatMap(x => x);


console.log(output); 
