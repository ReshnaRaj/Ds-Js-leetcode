function recurfib(num){
    if(num<2){
        return num
    }
     return recurfib(num-1)+recurfib(num-2)
}
console.log(recurfib(4)) 
  // 3 output  
