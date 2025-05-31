const express=require('express')
const app=express()
app.get('/',function (req,res){
res.send('Hello World')
})
app.listen(4500,()=>{
    console.log("server commected with 4500")
})
