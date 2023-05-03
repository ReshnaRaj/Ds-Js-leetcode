 class hashtable{
    constructor(size){
        this.table=new Array(50)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
         total+=key.charCodeAt(i)
        }
     return total%this.size
    }
    

 set(key,value){
    const index=this.hash(key)
    this.table[index]=value
 }
 get(key){
    const index=this.hash(key)
    return this.table[index]
 }
 display(){
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
            console.log(i,this.table[i])
        }
    }
 }
}
const table=new hashtable(45)
table.set('name','reshna')
console.log(table.get('name'))
table.display()

















