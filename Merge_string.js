var mergeAlternately = function(word1, word2) {
  let mergedString = "";
  const minLen = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLen; i++) {
    mergedString += word1[i] + word2[i];
    // console.log(mergedString,"5555")
  }

  if (word1.length > word2.length) {
     
    mergedString += word1.slice(minLen);
    console.log(mergedString,"yadhu")
    
  } else if (word2.length > word1.length) {
    mergedString += word2.slice(minLen);
    // console.log(mergedString,"uuuuu")
  }

  return mergedString;
};

console.log(mergeAlternately("abc", "pqr"));   // Output: "apbqcr"
 console.log(mergeAlternately("ab", "pqrs"));  // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq"));  // Output: "apbqcd"
