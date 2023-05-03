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
    set(key,value){
        const index=this.hash(key)
        this.table[index]=value

    }
    get(key){
        const index=this.hash(key)
        return this.table[index]

    }
    remove(key){
        const index=this.hash(key)
        this.table[index]=undefined
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
table.set('h',45)
table.set("address",'krishnakripa')
table.set('name',"reshna")
table.set('age',18)

// table.display()
// console.log(table.get('name'));
table.display()
table.remove('name')
console.log("after removing the data")
table.display()
