const fruits = [1,2,3,4,5,6];

// add new data at position 2 the data is 200 and 0 represent non values delete
fruits.splice(2,0,200); [1,2,200,3,4,5,6]

fruits.splice(4,1,"five")
// complexity is O(1)S O(n)T
 // remove the data at position 4 and at position 4 a new data added third parameter is the data second parameter is for count of total data added to the array
fruits.splice(4,1)
// remove the data at position 4 and delete only 1 value if you want to remove more than one value you can change the number
console.log(fruits)
