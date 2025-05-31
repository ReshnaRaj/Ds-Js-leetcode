function palindrome(num)

{
    let reverse=0
    let original=num
    while(num>0){
        let remainder=num%10
        reverse=reverse*10+remainder
        num=(num-remainder)/10
    }
    if(original===reverse){
        return true
    }
    else{
        return false
    }
}
console.log(palindrome(121))