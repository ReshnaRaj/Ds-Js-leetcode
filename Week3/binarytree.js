// node initialisation
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
    if(this.root==null){
        this.root=newnode
    }
    else{
        this.insertnode(this.root,newnode)
    }
    // console.log("Inserted node:", newnode.value);
}
insertnode(root,newnode){
    if(newnode.value<root.value){
        if(root.left===null){
            root.left=newnode
        }
        else{
            this.insertnode(root.left,newnode)
        }
    }
    else{
        if(root.right===null){
            root.right=newnode
        }
        else{
            this.insertnode(root.right,newnode)
        }
    }
   
    

}
    findSum() {
    let sum = 0;

    function Inorder(root) {
      if (!root) return;
      Inorder(root.left);
      sum += root.value; // Add the current node's value to the sum
      Inorder(root.right);
    }

    Inorder(this.root);
    return sum;
  }
search(root,value){
    if(!root){
        return false
    }
    else{
        if(root.value===value){
            return true
        }
        else if(value<root.value){
            return this.search(root.left,value)
        }
        else{
            return this.search(root.right,value)
        }
    }
}
preorder(root){
    if(root){
        console.log(root.value);
        this.preorder(root.left)
        this.preorder(root.right)
    }
}
Inorder(root){
    if(root){
        this.Inorder(root.left);
        console.log(root.value)
        this.Inorder(root.right)
    }

}
postorder(root){
    if(root){
        this.postorder(root.left)
        this.postorder(root.right)
        console.log(root.value);
    }
}
levelOrder(){
    const queue=[]
    queue.push(this.root)
    while(queue.length){
        let curr=queue.shift()
        console.log(curr.value);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
}
Min(root){
    if(!root.left){
        return root.value
    }
    else{
        return this.Min(root.left)
    }
}
max(root){
    if(!root.right){
        return root.value
    }
    else{
        return this.max(root.right)
    }
}
delete(value){
    this.root=this.deleteNode(this.root,value)
}
deleteNode(root,value){
    if(root===null){
        return root
    }
    if(value<root.value){
        root.left=this.deleteNode(root.left,value)
    }
    else if(value>root.value){
        root.right=this.deleteNode(root.right,value)
    }
    else{
        if(!root.left&&!root.right){
            return null
        }
        if(!root.left){
            return root.right
        }
        else if(!root.right){
            return root.left
        }
        root.value=this.Min(root.right)
        root.right=this.deleteNode(root.right,root.value)
    }
    return root
}
     valid() {
    let value = [];
    this.Inorder(this.root, value);
    for (let i = 0; i < value.length; i++) {
      if (value[i] <= value[i - 1]) {
        return false;
      }
    }
    return true;
  }
    findSecondLargest() {
    if (!this.root) {
      console.log("The tree is empty");
      return null;
    }

    let current = this.root;
    let secondLargest = null;

    while (current.right) {
      if (!current.right.right && !current.right.left) {
        secondLargest = current.value;
        break;
      }
      current = current.right;
    }

    return secondLargest;
  }


}
const bst=new BinaryStree()
bst.insert(10)

bst.insert(15)
bst.insert(3)
bst.insert(5)

bst.insert(7)
bst.insert(9)
bst.insert(20)
bst.insert(11)

// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,15))
// console.log(bst.search(bst.root,2))
bst.preorder(bst.root)
// bst.Inorder(bst.root)
// bst.postorder(bst.root)
// bst.levelOrder()
// console.log(bst.Min(bst.root),"miini")
// console.log(bst.max(bst.root))
// bst.delete(7)
// console.log('after deleting ');
// bst.levelOrder()
console.log("second largest element",bst.findSecondLargest())
console.log("Is the tree a valid BST?", bst.valid());
const sum = bst.findSum();
console.log("Sum of elements:", sum);
