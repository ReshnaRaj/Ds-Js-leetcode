// A Proxy in JavaScript is an object that wraps another 
// object and allows you to intercept and customize operations like:


// let target = { name: 'John' }

// let handler = {
//     get: (obj, prop) => {
//         return prop in obj ? obj[prop] : 'Property not exist'
//     }
// }

// const proxy = new Proxy(target, handler)

// console.log(proxy.name);
// console.log(proxy.age);
let target={
    name:"Reshna"
}
let handler={
    get:(obj,prop)=>{
        return prop in obj?obj[prop]:"Property not exist"
    }
}
const proxy=new Proxy(target,handler)
console.log(proxy.name)
console.log(proxy.age)
 