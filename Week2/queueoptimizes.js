class Queue{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
    }
    enque(element){
        this.items[this.rear]=element
        this.rear++
    }
    deque(){
        const item=this.items[this.front]
        // console.log(item);
        delete this.items[this.front]
        // console.log(this.front,"after deleting")
        this.front++
        // console.log(this.front,"front incremant")
        return item

    }
    print(){
        console.log(this.items);
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    size(){
        return this.rear-this.front
        // return this.items.length
    }
    peek(){
        return this.items[this.front]
    }
}
const o=new Queue()

o.enque(5)
// o.deque()
o.enque(10)
o.enque(15)
// console.log(o.peek())
// console.log(o.isEmpty());
// console.log(o.size());
o.print()
o.deque()
o.print()
console.log(o.size())
