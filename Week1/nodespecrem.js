class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
       
        if(this.isEmpty()){
            this.head=node
           
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
        
    }
    removespecified(index){
        if(index<0||index>=this.size){
            return null
        }
        // if the index<0 so it not allowed
        let removeNode
        if(index==0){
            removeNode=this.head
            this.head=this.head.next
            
            console.log("first position")
        }
        // removing the first node
        else if (index == this.size - 1) {
            let prev = this.head;
            while (prev.next.next !== null) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = null;
        } 
        // removing the last node so for that we need to specify the last index of a node in linkedlist
        else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
        }
        // removing the specified node
        this.size--
        return removeNode.value
    }
    removeByValue(value) {
        if (this.isEmpty()) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        }

        let prev = this.head;
        let curr = this.head.next;
        while (curr !== null) {
            if (curr.value === value) {
                prev.next = curr.next;
                this.size--;
                return value;
            }
            prev = curr;
            curr = curr.next;
        }

        return null; // Node with the given value not found
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr=this.head
            // console.log(curr.value,"current value")
            let listvalues=""
            while(curr){
                // listvalues+=curr.value
                listvalues+= `${curr.value} `
                curr=curr.next
            }
            console.log(listvalues)
        }
    }
}
const list=new LinkedList()
// console.log('list is empty?',list.isEmpty());
// console.log('list size',list.getSize());
// list.print()
list.prepend(10);

list.prepend(20)
list.prepend(40)
list.prepend(50)
console.log(list.getSize(),"size specified")
console.log(list.removespecified(0),"3 position removed")
// console.log(list.removeByValue(50))
list.print()
console.log(list.getSize()," after removing size specified")




