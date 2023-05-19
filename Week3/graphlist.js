class Graph{
    constructor(){
        this.adjacencylist={}
    }
    // add new vertex
    addvertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex]=new Set()


        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencylist[vertex1]){
            this.addvertex(vertex1)
            
        }
        if(!this.adjacencylist[vertex2]){
            this.addvertex(vertex2)
            
        }
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacencylist){
            console.log(vertex +'->'+[...this.adjacencylist[vertex]]);
        }
    }
    removeEdge(vertex1,vertex2){
        return (
            this.adjacencylist[vertex1].delete(vertex2)&&
            this.adjacencylist[vertex2].delete(vertex1)
        )

    }
    removevertex(vertex){
        if(!this.adjacencylist[vertex]){
            return
        }
        
            for(let adjacentVertex of this.adjacencylist[vertex]){
                this.removeEdge(vertex,adjacentVertex)
            }
            delete this.adjacencylist[vertex]
        
    }
   
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencylist[vertex1].has(vertex2)&&
            this.adjacencylist[vertex2].has(vertex1)
        )
    }
}
const gr=new Graph()
gr.addvertex('A')
gr.addvertex('B')
gr.addvertex('C')
// gr.addvertex('D')
gr.addEdge('A','B')
gr.addEdge('B','C')
gr.display()
gr.removevertex('A')
// gr.removeEdge('A','B')
console.log("after edge removal");
gr.display()
// console.log(gr.hasEdge('A','B'));
