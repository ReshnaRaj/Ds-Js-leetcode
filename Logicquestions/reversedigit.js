// sum of digits
// let number=3434
// let sum=0
// let temp;
// while(number>0){
// temp=number%10
// sum=sum+temp
// number=Math.floor(number/10)
// }
// console.log(sum)
// reverse the digits
let number=34567
let temp
let reverse=0
while(number>0){
    temp=number%10
    reverse=reverse*10+temp
    number=Math.floor(number/10)
}
console.log(reverse)