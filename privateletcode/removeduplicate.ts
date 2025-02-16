function removeDuplicates(nums: number[]): number {
    let k = 0;
    for (const num of nums) {
        if (k === 0 || num > nums[k - 1]) {
            nums[k++] = num;
        }
    }
    return k;
}


let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log("k1:", k1); 
console.log("nums1:", nums1); 


let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log("k2:", k2);
console.log("nums2:", nums2); 


