// deep copy
const a=5
let b=a
b=6
console.log(a)
// 5
console.log(b)
// 6

// shallow copy
const a={
    task:'Follow',
    person:'reshna'
}
let b=a
b.person='Teena'
console.log(a.person)
// Teeena
console.log(b.person)
// Teena
