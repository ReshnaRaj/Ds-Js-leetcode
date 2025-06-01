function findNode(tree, targetName) {
    if (tree.name === targetName) {
      return {
        name: tree.name,
        children: tree.children
      };
    } else if (tree.children) {
      for (const child of tree.children) {
        const result = findNode(child, targetName);
        // console.log(result,"uuuu")
        if (result) {
          if (result.name === targetName) {
            return result;
          }
          return {
            name: tree.name,
            children: [result]
          };
        }
      }
    }
    return null;
  }
  
  const tree = {
    name: 'root',
    children: [
      { name: 'adsa' },
      {
        name: 'tgdfg',
        children: [
          { name: 'llsodf' },
          {
            name: 'trrrdfg',
            children: [
              { name: 'lrdf' }
            ]
          }
        ]
      },
      {
        name: 'xwqer',
        children: [
          { name: 'possm' }
        ]
      }
    ]
  };
  
  const result = findNode(tree, 'xwqer');
  console.log(JSON.stringify(result, null, 2)); // Use JSON.stringify for formatted output
  