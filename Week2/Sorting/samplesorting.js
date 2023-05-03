// function bubble(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }

//     }
//     return arr

// }
// console.log(bubble([3,4,5,1,0,-2]));
// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         let minindex=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[minindex]){
//                 minindex=j
//             }

//         }
//         if(minindex!==i){
//             let temp=arr[i]
//             arr[i]=arr[minindex]
//             arr[minindex]=temp
//         }
//     }
//     return arr

// }
// console.log(selection([3,4,5,-2,-4,0]));
// function insertion(arr){
//     for(let i=1;i<arr.length;i++){
//         let key=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=key
//     }
//     return arr

// }
// console.log(insertion([3,4,5,0,-1,-400]));
// function quick(arr){
//     if(arr.length<2){
//         return arr
//     }
    
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]


// }
// console.log(quick([8,6,3,1,3,0,-1]));
// function merge(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid=Math.floor(arr.length/2)
//     const left=arr.slice(0,mid)
//     const right=arr.slice(mid)
//     return MergerNode(merge(left),merge(right))
// }
// function MergerNode(left,right){
//     const sortArr=[]
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sortArr.push(left.shift())
//         }
//         else{
//             sortArr.push(right.shift())
//         }
//     }
//     return [...sortArr,...left,...right]
// }
// console.log(merge([5,2,1,3,-5,0]));
