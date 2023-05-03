var name="reshna"
var name2="kp"
var concatenatedString = name + name2;
// console.log(concatenatedString);
function palindrome(str){
    let reverse=str.split('').reverse().join('')
    console.log(reverse)
    if(str==reverse){
        console.log("palindorm")
    }
    else{
        console.log("not palindrom")
    }
}
// palindrome("mom")

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !==str[str.length - 1 - i]) {
        return false; // If characters don't match, return false
      }
    }
  
    return true; // All characters matched, so it's a palindrome
  }
  
  // Example usage
  const str1 = "racecar";
  console.log(isPalindrome(str1)); // Output: true
  
  const str2 = "Hello, world!";
  console.log(isPalindrome(str2)); // Output: false
  