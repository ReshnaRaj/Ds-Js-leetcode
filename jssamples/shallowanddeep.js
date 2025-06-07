// deep copy
const aa=5
let bb=aa
bb=6
console.log(aa)
// 5
console.log(bb)
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
