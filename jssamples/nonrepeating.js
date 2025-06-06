// find the first non-repeating character in a string
function firstUniqueChar(str) {
  const map = new Map();

  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of str) {
    if (map.get(char) === 1) return char;
  }

  return null;
}
// Example usage:
console.log(firstUniqueChar("leetcode")); // Output: "l"
console.log(firstUniqueChar("loveleetcode")); // Output: "v"
console.log(firstUniqueChar("aabb")); // Output: null
console.log(firstUniqueChar("")); // Output: null
console.log(firstUniqueChar("a")); // Output: "a"
console.log(firstUniqueChar("abacabad")); // Output: "c"