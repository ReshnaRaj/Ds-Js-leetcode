// You are given two positive integers n and limit.

// Return the total number of ways to distribute n candies among 3 children such that no child gets more than limit candies.


/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let count=0
    for(let i=0;i<=limit;i++){
        for(let j=0;j<=limit;j++){
            for(let k=0;k<=limit;k++){
                if(i+j+k>n){
                    break;
                }
                if(i+j+k==n){
                    count++
                }
            }
        }
       
    }
     return count

    
};
