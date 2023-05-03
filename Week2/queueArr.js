class Queue{
    constructor(){
        this.items=[]

    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
         return this.items.shift()
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    //     else{
    //     const p=this.items[0]
    //    console.log(p,"peek value")
    //     }
    }
    print(){
        console.log(this.items.toString())
    }
    isEmpty(){
        return this.items.length===0
    }
    size(){
        return this.items.length

    }

   
    
}
const q=new Queue()

q.enqueue(45)
q.enqueue(30)
console.log(q.isEmpty());

q.enqueue(50)
q.enqueue(100)
console.log(q.size())
// q.dequeue()
q.peek()
q.print()

