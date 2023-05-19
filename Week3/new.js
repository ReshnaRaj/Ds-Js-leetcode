function findMaxConsecutiveOnes(nums) {
      let count=0,flag=0;
      for(let i=0;i<nums.length;i++){
          if(nums[i]==1){
              count++;
              console.log(count,"initial count");
              if(count>flag){
                  flag=count;
                  console.log(flag,"initial flag");
              }
          }else{
              count=0;
          }
      }
      return flag;
  }

console.log("Maximum length of consecutive 1's:",findMaxConsecutiveOnes([1, 0, 1, 1,1,1,1, 0, 1, 1,1]));