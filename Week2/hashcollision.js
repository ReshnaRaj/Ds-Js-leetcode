



class Hash{
    constructor(size){
        this.table=new Array(size)
        // creates a array with specified size
        this.size=size
    }
    hash(key){
       let total=0
       for(let i=0;i<key.length;i++){
        total+=key.charCodeAt(i)
       }
       return total%this.size
    }
    //  set(key,value){
    //      const index=this.hash(key)
    //      console.log(index,"index");
    //      const bucket=this.table[index]
    //      console.log(this.table[index],"table index value");
    //      if(!bucket){
    //         this.table[index]=[[key,value]]
    //      }
    //      else{
    //          const samekeyItem=bucket.find(item=>item[0]===key)
    //          if(samekeyItem){
    //              samekeyItem[1]=value
    //          }
    //          else{
    //              bucket.push([key,value])
    //        }
    //     }
    //     }

    set(key, value) {
        const index = this.hash(key);
        console.log(index,"index value");
        if (!this.table[index]) {
          this.table[index] = [];
        }
        this.table[index].push([key, value ]);
      }
      get(key){
        const index = this.hash(key)
        if(this.table[index]){
            
        const item = this.table[index].find(arr=> arr[0] == key)
        return item
        }
        return undefined 
      }
    
    //   remove(key){
    //     const index = this.hash(key)
    //     if(this.table[index]){
    //       for(let i = 0; i < this.table[index].length; i++){
    //         if(this.table[index][0] === key){
    //           this.table[index].splice(i, 1)
                 
    //         }
    //         if(this.table[index].length === 0){
    //           this.table[index] = undefined
    //         }
    //       }
    //     }
    //     return undefined
    //   }
    remove(key)
    {
        const index=this.hash(key)
        const bucket=this.table[index]
       
        if(bucket){
            const samekey=bucket.find(item=>item[0]===key)
            if(samekey){
                bucket.splice(bucket.indexOf(samekey),1)
                console.log(bucket.indexOf(samekey),"samekey");
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
const table=new Hash(50)
// table.set('h',45)
// table.set('h',56)
// table.set('h',50)
table.set("address",'krishnakripa')
table.set('name',"reshna")
table.set('name',"bijith")




table.set('age',18)

// table.display()
console.log(table.get('name'),"get method");
// table.display()
table.remove('name')

console.log("after removing the data")
table.display()
















