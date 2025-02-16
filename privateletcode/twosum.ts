function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
          for (let j = i + 1; j < nums.length; j++) {
              if (nums[j] === target - nums[i]) {
                  return [i, j];
              }
          }
      }
  
      return [];  
  };
console.log(twoSum([3, 2, 4], 6))