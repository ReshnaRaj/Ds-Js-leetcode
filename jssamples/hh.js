let sqr=[]
let p=1
let n=[2,3,4,5]
for(let i=0;i<n.length;i++){
    let result=1
    for(let j=0;j<p;j++){
        result=result*n[i]
    }
    sqr.push(result)
    p++

}
console.log(sqr)
// const arr=[3,4,5]
// for(let i=0;i<arr.length;i++){
//     let result=arr[i]*arr[i]
//     console.log(result)
// }