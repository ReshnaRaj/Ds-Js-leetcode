function insertAtBeginning(arr,element) {
    let newArray = [element];
    
    for (let i = 0; i < arr.length; i++) {
      // console.log(newArray)
      newArray[i + 1] = arr[i];
      
    }
    return newArray;
  }

  let newArray = insertAtBeginning([1.5,2 ,3, 4, 5],1);
  // console.log(newArray); 
  //---- By Using Array method------------
  const array=[2,3,4,5]
  array.push(145)
  console.log(array)
  