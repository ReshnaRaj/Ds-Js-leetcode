const ab = [
  { af: [4, 34, 343] },
  { af: [4, 34, 344] },
  { af: [4, 34, 345] },
  { af: [4, 34, 346] }
];

const result=[]
for(let i=0;i<ab.length;i++){
    let sum=0
    let current=ab[i].af
    for(let j=0;j<current.length;j++){
        sum=sum+current[j]
    }
     
   result[result.length]={af:sum}
}

console.log(result)
// output :[ { af: 381 }, { af: 382 }, { af: 383 }, { af: 384 } ]