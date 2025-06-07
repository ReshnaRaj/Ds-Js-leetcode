Array.prototype.myMap = function(callback) {
  let result = [];
console.log(callback,"callback",this.length)
  // `this` refers to the array we're calling `.myMap()` on
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};
const numbers = [1, 2, 3, 4];

const squared = numbers.myMap(function(num) {
    console.log(num)
  return num * num;
});

console.log(squared); // Output: [1, 4, 9, 16]
// ✅ Use custom .map() when you're learning, customizing behavior, or writing polyfills.

// ⚡ Use built-in .map() for production code — it’s optimized, safe, and fully spec-compliant.
// A polyfill is a piece of JavaScript code (often a function or a library) that adds support for newer features in older browsers or environments that do not natively support them.

// In simple words:

// A polyfill is a workaround or fallback to make modern JavaScript features work in older browsers.
