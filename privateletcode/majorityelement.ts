function majorityElement(nums: number[]): number {
    let a = 0;
    let b = 0;

    for (let num of nums) {
        if (b === 0) {
        a = num;
        }
        if (num === a) {
            b++;
        } else {
            b--;
        }
    }
    return a;
}


console.log(majorityElement([2, 2, 2, 1, 1, 2, 2]));