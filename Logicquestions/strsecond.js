const str="Reshna Placed at 12LPA"
let largest='',second='',word=''
for(let i=0;i<=str.length;i++){
     
    if(str[i]!==' '&&i!==str.length)
    {
       
        word+=str[i]  
         
         
    }
    else{
        
        
        if(word.length>largest.length){
            second=largest
             
            largest=word
        }
        else if(word.length>second.length&&word.length!==largest.length){
            second=word
        }
        word=""
    }
}
console.log(second)
 