class stack{
    constructor(){
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
    // isEmpty(){
    //     return this.items.length===0
    // }
    // size(){
    //     return this.items.length
    // }
    print(){
        // const empty=this.items.length
        // console.log(empty)
        // console.log(this.items.toString()) it will getting as a string
        console.log(this.items);

    }
    // peek(){
    //     const top=this.items[this.items.length-1]
    //     console.log(top,"peek value");
    // }
}
const stackk=new stack()
stackk.push(2)
stackk.push(3)
stackk.push(5)
stackk.push(100)
// console.log(stackk.peek())

// stackk.pop()
// console.log(stackk.peek())

stackk.print()
