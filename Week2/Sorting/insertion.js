function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        // j means the first value of the array
        // and if the condition is true then swap it 
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            console.log(arr[j+1],"j+1 value")
            j = j - 1;
        }
        arr[j + 1] = key;
        console.log(arr[j+1],"while condition false")
    }
    return arr;
}

// Example usage:
let arr = [13,5,15,1];
console.log("Original array: " + arr);
console.log("Sorted array: " + insertionSort(arr));
