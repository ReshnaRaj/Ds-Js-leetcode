class Node{
    constructor(value){
    this.value=value;
    this.next=null;
    }}
    class LinkedList{
    constructor(){
    // this.head=null;
    this.size=0;
    }
    add(value){
        {
    const node=new Node(value)
    node.next=this.head;
    this.head=node;

    }
    this.size++;
    }
    
    print(){
    
    let current=this.head
    let listed=""
    while(current){
    listed+=`${current.value} `
    current=current.next;
    }
    console.log(listed)
}
    }
    const list=new LinkedList()
    list.add(12)
    list.add(13)
    list.add(14)
    list.print()