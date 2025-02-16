function singleNumber(nums: number[]): number {
    let result = 0;
     for (let i = 0; i < nums.length; i++) {
         result ^= nums[i];
     }
     return result;
 }
 
 
 console.log(singleNumber([2,3,3]));       
 console.log(singleNumber([0,1,0,1,99]));     
   
 