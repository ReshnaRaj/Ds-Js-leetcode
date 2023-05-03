class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.first=0
        this.last=0
        this.size=0
    }
    enque(val){
        const newnode=new Node(val)
        if(!this.first){
            this.first=newnode
            this.last=newnode
        }
        else{
            this.last.next=newnode
            this.last=newnode
        }
        this.size++
    }
    print(){
        let current=this.first
        while(current){
            console.log(current.value)
            current=current.next
        }
    }
    peek()
    {
        return this.first.value
    }
    deque(){
        if(!this.first){
            return null
        }
        var temp=this.first
        if(this.first===this.last){
            this.last=null
        }
        else{
            this.first=this.first.next
            this.size--
            return temp.value
        }
        
    }
}
const q=new Queue()
q.enque(2)
q.enque(4)
q.enque(5)
q.print()
console.log("dequee operation")
// console.log(q.peek(),"peek");
q.deque()
q.print()