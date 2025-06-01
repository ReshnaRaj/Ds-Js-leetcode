function sumofpos(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            sum = sum + arr[i]

        }
    }
    return sum



}
console.log(sumofpos([5, 6, -3, 5]))
