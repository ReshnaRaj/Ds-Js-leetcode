function one(fn) {
    let called = false;

    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args)
        } else {
            console.log('Function has already called once');
        }
    }
};

function greet(name) {
    console.log(`Hello ${name}`);
};

const greeted = one(greet);

greeted('Abin');
greeted('John');
// 🔍 Step-by-Step Explanation
// 1. function one(fn)
// This is a higher-order function — it takes a function fn as an argument.

// Inside, it defines a variable called to keep track of whether fn has already been executed.

// 2. return function (...args)
// This returns a new function (a closure) that wraps around fn.

// ...args is the rest operator, so it collects all passed arguments.

// 3. Inside the returned function
 
// if (!called) {
//     called = true;
//     return fn(...args)
// } else {
//     console.log('Function has already called once');
// }
// On the first call, called is false, so:

// It changes called to true.

// It executes fn(...args) (which means calling the greet function with the provided argument).

// On any subsequent calls, called is true, so:

// It skips calling the function.

// Logs: "Function has already called once"

// 4. Usage:
 
// const greeted = one(greet);
// This creates a new function greeted, which can only call greet() once.

// js
// Copy
// Edit
// greeted('Abin');  // First call → prints: Hello Abin
// greeted('John');  // Second call → prints: Function has already called once
// 🔁 Why Use This Pattern?
// This is useful when:

// You want to prevent double submission (e.g., in forms).

// Initialize something only once (e.g., configuration or API call).

// Guard against repeated function calls that must only happen once.