function longConsecutive(str) {
  let maxCount = 1;
  let currentCount = 1;
  let maxChar = str[0];
  let currentChar = str[0];
  for(let i=1;i<str.length;i++){
    if(str[i]===currentChar){
        currentCount++
    }
    else{
        currentChar=str[i]
        currentCount=1
    }
    if(currentCount>maxCount){
        maxCount=currentCount
        maxChar=currentChar
    }
  }
  return {char:maxChar,count:maxCount}
}
console.log(longConsecutive("abbbbabcadefddddddd"))
