// //1
// function getStatsWithoutSort(arr: number[]): { lowest: number, highest: number, average: number } {
//     let lowest = arr[0];
//     let highest = arr[0];
//     let total = 0;

//     for (const num of arr) {
//         if (num < lowest) lowest = num;
//         if (num > highest) highest = num;
//         total += num;
//     }

//     const average = total / arr.length;
//     return { lowest, highest, average };
// }


// const arr = [12, 5, 23, 18, 4, 45, 32];
// console.log(getStatsWithoutSort(arr)); 


// //2
// function concatenateWords(words: string[]): string {
//     if (words.length === 0) return "";
//     if (words.length === 1) return words[0];
//     return words.slice(0, -1).join(", ") + ", and " + words[words.length - 1];
// }


// const words = ["apple", "banana", "cherry", "date"];
// console.log(concatenateWords(words)); // Output: "apple, banana, cherry, and date"


// //3
// function secondSmallest(numbers: number[]): number | null {
//     if (numbers.length < 2) return null;
//     const sortedNumbers = [...numbers].sort((a, b) => a - b);
//     return sortedNumbers[1];
// }


// const numbers = [5, 4, 1, 7, 3, 6];
// console.log(secondSmallest(numbers)); // Output: 2


// //4
// function sumArrays(arr1: number[], arr2: number[]): number[] {
//     return arr1.map((value, index) => value + arr2[index]);
// }


// const arr1 = [1, 2, 3];
// const arr2 = [3, 2, 1];
// console.log(sumArrays(arr1, arr2)); // Output: [4, 4, 4]



//Nomor 5
// function addUniqueElement(arr: number[], element: number): number[] {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === element) {
//         return arr; 
//       }
//     }
//     arr.push(element); 
//     return arr;
//   }
  
//   const arr1 = [1, 2, 3, 4];
//   console.log(addUniqueElement(arr1, 4)); 
//   console.log(addUniqueElement(arr1, 7));




function getTime(): number {
    return new Date().getTime();
  }
  
  console.log(getTime());