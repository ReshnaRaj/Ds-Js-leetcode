// find the sum of digits in a number
  function digitSum(num){
    let sum=0
    while(num>0){
        sum=sum+num%10
        console.log(num%10)
        console.log(sum)
        num=Math.floor(num/10)
        console.log(num)
    }
    return sum
  }
  console.log(digitSum(123))