
class Stack{
    constructor()
    {
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    print(){
        console.log(this.items)
    }
    // isEmpty(){
    //     return this.items.length==0
    // }
}
const st=new Stack()
st.push(3)
st.push(5)
st.push(31)
st.push(53)
st.push(33)
// console.log(st.isEmpty())
console.log(st.items.length==0?"empty":"not empty")
 
st.print()
