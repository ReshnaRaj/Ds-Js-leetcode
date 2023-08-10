check if two strings are equivalent
-------------------------------------------
var arrayStringsAreEqual = function(word1, word2) {
  let str1, str2;
	let len = Math.max(word1.length, word2.length);

	for (let i = 0; i < len; i++) {
		const char1 = word1[i];
		const char2 = word2[i];

		if (char1) str1 += char1;
		if (char2) str2 += char2;
	}

	return str1 === str2;
}
let word1=['ab','c']
let word2=['a','bc']
console.log(arrayStringsAreEqual(word1,word2))


Another method
----------------------------------------------------


function areStringsEquivalent(word1, word2) {
  let str1 = '';
  let str2 = '';

  for (let i = 0; i < word1.length; i++) {
    str1 += word1[i];
  }

  for (let j = 0; j < word2.length; j++) {
    str2 += word2[j];
  }

  if (str1.length !== str2.length) {
    return false; // Different lengths, not equivalent
  }

  for (let k = 0; k < str1.length; k++) {
    if (str1[k] !== str2[k]) {
      return false; // Different characters at the same index, not equivalent
    }
  }

  return true; // All characters are equivalent
}

// Example usage:
const wordArray1 = ["ab", "c"];
const wordArray2 = ["a", "bc"];
console.log(areStringsEquivalent(wordArray1, wordArray2)); // Output: true

const wordArray3 = ["a", "cb"];
const wordArray4 = ["ab", "c"];
console.log(areStringsEquivalent(wordArray3, wordArray4)); // Output: false

