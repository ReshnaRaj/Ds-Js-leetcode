function hello(a){
    return new Promise((resolve,reject)=>{
        if(a>5){
            resolve({state:"success"})
        }else{
            reject({state:"failed"})
        }
    }) .then((result)=>{
         console.log(result.state)
    }).catch((err)=>{
          console.log(err.state)
  })
  }
  let a=7
  hello(a)
  // hello(a).then((result)=>{
  //     console.log(result.state)
  // }).catch((err)=>{
  //         console.log(err.state)
  // })
  