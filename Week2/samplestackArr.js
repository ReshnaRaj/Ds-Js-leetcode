class stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    print(){
        const empty=this.items.length
        // console.log(empty)
        console.log(this.items)
    }
}
const atack=new stack()
atack.push(45)
atack.push(40)
atack.push(49)
atack.print()