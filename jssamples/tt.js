class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
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
    }
    insertnode(root,newnode){
        if(newnode.value<root.value){
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
    // sumElements(root){
    //     let sum=0
    //     function traverse(node) {
    //         if (node) {
    //           // Add the current node's value to the sum
    //           sum += node.value;
    //           // Recursively traverse the left and right subtrees
    //           traverse(node.left);
    //           traverse(node.right);
    //         }
    //       }
    //       traverse(root);
    //       return sum
        
          
    // }
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
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    Inorder(root){
        let sum=0
        if(root){
            sum+=this.Inorder(root.left)
            console.log(root.value)
            sum+=root.value
            sum+=this.Inorder(root.right) 
        }
        return sum  
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    valid(){
        let value=[]
        this.Inorder(this.root,value)
        for(let i=0;i<value.length;i++)
        if(value[i]<=value[i-1])
        {
            return false
        }
        else{
            return true
        }
    }
    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root==null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }
        else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }
    }

}
const bst=new BinaryStree()
bst.insert(10)
bst.insert(0)
bst.insert(34)
bst.insert(5)
bst.insert(3)
bst.Inorder(bst.root)
 
// const summation = bst.Inorder(bst.root);
// console.log("Sum of elements in the BST:", summation);