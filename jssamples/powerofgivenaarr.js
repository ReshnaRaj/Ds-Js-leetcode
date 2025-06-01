const array = [3, 5, 23, 6];
const power = 3;  

const result = array.map(element => Math.pow(element, power));

console.log(result);


// normal method 
const array = [3, 5, 23, 6];
const power = 2; // Change this to the desired power

function calculatePower(base, exponent) {
 
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
      
    }
    return result;
}
for (let i = 0; i < array.length; i++) {
    array[i] = calculatePower(array[i], power);
}

console.log(array);
