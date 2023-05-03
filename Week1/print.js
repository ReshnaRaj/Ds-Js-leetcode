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
    add(value)
    {
        {
        const node=new Node(value)
            node.next=this.head
            this.head=node
        }
        this.size++
        
    }
    print(){
        
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
const list=new LinkedList()
list.add(20)
list.add(40)
list.add(90)
list.print()
