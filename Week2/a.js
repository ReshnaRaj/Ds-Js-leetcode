class Queue{
    constructor(){
        this.fear=null
        this.rear=null
        this.size=0
    }
    enqueue(val){
        const newnode=new Node(val)
        if(!this.fear){
            this.fear=newnode
            this.rear=newnode
        }
        else{
            this.fear.next=newnode
            this.fear=newnode
            
        }
    }
}