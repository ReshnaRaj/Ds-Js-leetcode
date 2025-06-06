function even(){
    let result=[]
    for(let i=1;i<=20;i++){
        if(i%2==0){
            result.push(i)
        }
    }
    return result
}
console.log(even())