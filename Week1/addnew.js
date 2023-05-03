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
    startadd(value){
        const node=new Node(value)
       
        if(this.isEmpty()){
            this.head=node
           
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
        
    }
    endadd(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            
        }
        else{
           let prev=this.head
           while(prev.next){
            prev=prev.next
           }
           prev.next=node
        }
        this.size++
        

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
list.print()
list.endadd(10);
list.print()
list.endadd(20)
list.endadd(40)
list.print()




