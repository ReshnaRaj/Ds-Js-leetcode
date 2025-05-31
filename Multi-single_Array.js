function createUniqueArray(arr) {
  const values = new Set();

  for (let i = 0; i < arr.length; i++) {
    const [start, end] = arr[i];

    for (let j = start; j <= end; j++) {
      values.add(j);
    }
  }

  return Array.from(values);
}
console.log(createUniqueArray([[1,3],[3,6],[7,10]]))
