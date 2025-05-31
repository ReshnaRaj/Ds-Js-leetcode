let laptop = {
    cpu: 'i9',
    brand: 'hp',
    greet: function() {
        console.log("Hello World")
        console.log(this.cpu)
    }
}
const a=() => {
        console.log("Hello World");
        console.log(this.cpu); // Note: 'this' may not work as expected in arrow functions
    }
laptop.greet();
let laptop1 = {
    cpu: 'i9',
    brand: 'hp',
     greet: a
}


laptop1.greet();