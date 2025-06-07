//  A generator function in JavaScript is a special type of function that can pause 
//  and resume its execution. It's defined using function* and uses the yield keyword 
//  to return values one at a time — on demand.
function* counter(n){
    for(let i=1;i<=10;i++){
        yield n*i
    }
}
const counterw=counter(5)
console.log(counterw.next());
console.log(counterw.next());
console.log(counterw.next());
console.log(counterw.next());
// let set = setInterval(() => {
//     console.log(counterw.next());
// }, 1000);

// setTimeout(() => {
//     clearInterval(set)
// }, 11000);
 
 

 