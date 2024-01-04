var splitNum = function (num) {
    const digit = num.toString().split('').sort().map(Number);
     let num1=0
    let num2=0
     for(var i=0;i<digit.length;i++){
        if(i%2===0){
            num1=num1*10+digit[i]
        }else{
            num2=num2*10+digit[i]
        }
        }
        console.log(num1,num2)
     return num1+num2
     }


 Input: num = 4325
Output: 59
Explanation: We can split 4325 so that num1 is 24 and num2 is 35, giving a sum of 59. We can prove that 59 is indeed the minimal possible sum.



Input: num = 687
Output: 75
Explanation: We can split 687 so that num1 is 68 and num2 is 7, which would give an optimal sum of 75.
