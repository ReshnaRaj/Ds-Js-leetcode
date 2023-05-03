const sameNumber = (array, target) => {
    for (i = array.length - 1; i >=0 ; i--) {
        if(array[i] === target) {
            array.splice(i, 1)
            array.push(target)
        }
    }
    return array;
}

const array = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
const target = 6;

console.log(sameNumber(array, target));
//--Second Method--// //--Complexity O(n)T, O(1)S--//