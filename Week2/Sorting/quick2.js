function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Example usage:
let arr = [64, 25, 12, 22, 11,-20,9,0,-1];
console.log("Original array: " + arr);
console.log("Sorted array: " + quickSort(arr, 0, arr.length - 1));
