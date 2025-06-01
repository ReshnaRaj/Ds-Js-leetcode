class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinaryStree{
    constructor(){
        this.root=null
    }
    insert(value){
        const newnode=new Node(value)
        if(this.root==null)
        {
        this.root=newnode
        }
        else{
              this.insertnode(this.root,newnode)
        }

    }
    insertnode(root,newnode){
        if(newnode.value<root.value)
        {
            if(root.left==null){
                root.left=newnode
            }
            else{
                this.insertnode(root.left,newnode)
            }
        }
        else{
            if(root.right==null){
                root.right=newnode
            }
            else{
                this.insertnode(root.right,newnode)
            }
        }
    }
}
const bst=new BinaryStree
bst.insert(3)
bst.insert(5)
bst.insert(12)
console.log(bst)