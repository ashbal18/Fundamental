// //1
// function sumNumbersInMixedArray(mixedArray: (string | number | boolean | null | undefined)[]): number {
//     let total = 0;
//     for (const item of mixedArray) {
//         if (typeof item === "number") {
//             total += item;
//         }
//     }
//     return total;
// }

// // Contoh penggunaan:
// const mixedArray = ["3", 1, "string", null, false, undefined, 2];
// console.log(sumNumbersInMixedArray(mixedArray)); // Output: 3

// //2
// function insertIntegersWithMaxSize(maxSize: number, ...integers: number[]): number[] {
//     const result: number[] = [];
//     for (let i = 0; i < integers.length && result.length < maxSize; i++) {
//         result.push(integers[i]);
//     }
//     return result;
// }

// // Contoh penggunaan:
// const maxSize = 5;
// const integers = [5, 10, 24, 3, 6, 7, 8];
// console.log(insertIntegersWithMaxSize(maxSize, ...integers)); // Output: [5, 10, 24, 3, 6]

// //3
// function combineArrays(arr1: number[], arr2: number[]): number[] {
//     const result: number[] = [];
//     for (const num of arr1) {
//         result.push(num);
//     }
//     for (const num of arr2) {
//         result.push(num);
//     }
//     return result;
// }

// // Contoh penggunaan:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(combineArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]


// //4
// function findDuplicates(arr: number[]): number[] {
//     const seen: number[] = [];
//     const duplicates: number[] = [];

//     for (const num of arr) {
//         if (seen.includes(num)) {
//             if (!duplicates.includes(num)) {
//                 duplicates.push(num);
//             }
//         } else {
//             seen.push(num);
//         }
//     }

//     return duplicates;
// }

// // Contoh penggunaan:
// const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// console.log(findDuplicates(arr)); // Output: [2, 3, 5]

// //5
// function findDifference(arr1: number[], arr2: number[]): number[] {
//     const difference: number[] = [];

//     for (const num of arr1) {
//         if (!arr2.includes(num)) {
//             difference.push(num);
//         }
//     }

//     for (const num of arr2) {
//         if (!arr1.includes(num)) {
//             difference.push(num);
//         }
//     }

//     return difference;
// }

// // Contoh penggunaan:
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// console.log(findDifference(arr1, arr2)); // Output: [1, 2, 6, 7]


//1 reduce
function myFunc(arr: (string | number | null | boolean | undefined)[]) {
    return arr.filter((item) => typeof item == "number").reduce((a, b) => a + b);

}
console.log(myFunc(["3", 2, "string", 5, false, undefined, 1]));

// //2 maxsize
// function myFunc(maxSize: number, ...num: number[]){
//     num.length = maxSize
//     return num
// }

// console.log(myFunc(6, 5, 10, 24, 3, 6, 7, 8));

//3 combine
function combineArr(arr1: number[], arr2: number[]){
    return arr1.concat(arr2);
}
console.log(combineArr([1, 2, 3], [4, 5, 6]));

//4 duplicate
function findDup(arr: number[]){
    arr.sort((a, b) => a - b);
    const res: number[] = [];
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] == arr[i - 1] || arr[i] == arr[i + 1]) && !res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(findDup([1, 2, 2, 2, 3, 3, 4, 5, 5]));


//5 Different 
 function diff(arr1: number [], arr2: number[]) {
    const res: number[] = []
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            res.push(arr1[i]);
        }
        if (!arr1.includes(arr2[i])){
            res.push(arr2[i]);
        }
    }
    return res;
 }

 console.log(diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));