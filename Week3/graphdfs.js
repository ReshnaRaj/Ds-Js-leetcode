let graph={
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
  }
  
  depthFirstPrint(graph,'a');
  //depthFirstRecursion(graph,'a')
  
  //iteartive implementation
   function depthFirstPrint(graph,source){
    const stack = [source]
    while(stack.length >0){
      const curr = stack.pop()
      console.log(curr)
      for(let neighbor of graph[curr]){
        stack.push(neighbor)
      }
    }
  }
  
  // function depthFirstRecursion(graph,source){
  //   console.log (source)
  //   for(let neighbor of graph[source]){
  //     depthFirstRecursion(graph,neighbor)
  //   }
  // }