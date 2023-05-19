function heapSort(array) {
    // Build the heap (rearrange the array)
    let n=array.length
    for (let i = Math.floor(n/ 2) - 1; i >= 0; i--)
      heapify(array, n, i);
  
    // One by one extract an element from heap
    for (let i = n - 1; i >= 0; i--) {
      // Move current root to end
      let temp = array[0];
      array[0] = array[i];
    array[i] = temp;
  
      // Call heapify on the reduced heap
      heapify(array, i, 0);
    }
    return array;
  }
  
  function heapify(array, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
  
    // If left child is larger than root
    if (l < n && array[l] > array[largest])
    
      largest = l;
  
    // If right child is larger than largest so far
    if (r < n && array[r] > array[largest])
      largest = r;
  
    // If largest is not root
    if (largest != i) {
        let temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        
  
      // Recursively heapify the affected sub-tree
      heapify(array, n, largest);
    }
  }
  const sortedArray = heapSort([81, 89, 11, 14, 5, -2]);
  console.log(sortedArray);
  const maxHeapValue = sortedArray[sortedArray.length - 3];
  console.log(maxHeapValue);
  