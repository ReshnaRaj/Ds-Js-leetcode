class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
      }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
    print() {
        let current = this.first;
        while (current) {
          console.log(current.value);
          current = current.next;
        }
      }
      peek(){
        if(!this.first){
            return null
        }
        else{
            return this.first.value
        }
      }
}
const q=new Queue()
q.enqueue(3)
q.enqueue(4)
q.print()
q.dequeue()
console.log("after removing");
q.print()
console.log(q.peek(),"peek")
