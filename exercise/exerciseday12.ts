
// function majorityElement(nums: number[]): number {
//         let a = 0;
//         let b = 0;

//         for (let num of nums) {
//             if (b === 0) {
//             a = num;
//             }
//             if (num === a) {
//                 b++;
//             } else {
//                 b--;
//             }
//         }
//         return a;
//     }


// console.log(majorityElement([2, 2, 2, 1, 1, 2, 2]));



// //alternatif1
// function majorityElement2(nums: number[]): number {
//     let candidate = 0;
//     let count = 0;

//     for (let num of nums) {
//         if (count === 0) {
//             candidate = num;
//         }
//         count += (num === candidate) ? 1 : -1;
//     }

//     return candidate;
// }

// console.log(majorityElement2([1, 1, 2, 2, 3])); 




// //nomor2
// function romanToInt(s: string): number {
//     const romanMap: { [key: string]: number } = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000,
//     };
  
//     let result: number = 0;
//     let prevValue: number = 0;
  
//     for (let i: number = s.length - 1; i >= 0; i--) {
//         const currentValue: number = romanMap[s[i]];
  
//         if (currentValue < prevValue) {
//             result -= currentValue;
//         } else {
//             result += currentValue;
//         }
  
//         prevValue = currentValue;
//     }
  
//     return result;
//   }
//   console.log(romanToInt("III"))
//   console.log(romanToInt("LVIII"))
//   console.log(romanToInt("MCMXCIV"))



//   //nomor3
//   function generate(numRows: number): number[][] {
//     const f: number[][] = [[1]];
//     for (let i = 0; i < numRows - 1; ++i) {
//         const g: number[] = [1];
//         for (let j = 0; j < f[i].length - 1; ++j) {
//             g.push(f[i][j] + f[i][j + 1]);
//         }
//         g.push(1);
//         f.push(g);
//     }
//     return f;
// }


// //nomor 4
// // function maxProfit(prices: number[]): number {
// //     let max = 0;
// //     let min = prices[0];
// //     for (const v of prices) {
// //         max = Math.max(max, v - min);
// //         min = Math.min(min, v);
// //     }
// //     return max;
// // }


// // console.log(maxProfit([7, 1, 5, 3, 6, 4])); 
// // console.log(maxProfit([7, 6, 4, 3, 1])); 

// // alternatrifnomor4
// function maxProfit(prices: number[]): number {
//     let minPrice = prices[0]; 
//     let maxProfit = 0;      

//     for (const price of prices) {
//         minPrice = Math.min(minPrice, price); 
//         maxProfit = Math.max(maxProfit, price - minPrice); 
//     }

//     return maxProfit;
// }
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1])); 



//1 
function myFunc(arr: number[]): number | null {
    const set = new Set(arr);
    let res = null;
    set.forEach((item: number) => {
        if (arr.filter((value) => value === item).length > arr.length / 2) {
            res = item;
        }
    });
    return res;
}

console.log(myFunc([3, 2, 3]));



//3
function pascal(n : number){
    const res = [];
    for (let i = 0; i < n; i++){
        const arr: number[] = [];
        for(let j = 0; j <= i; j++){
            if (j == 0 || j == i){
                arr.push(1);
            } else {
                arr.push(res[i - 1][j - 1] + res[i - 1][j]);
            }
        }
        res.push(arr);
    }
    return res;
}
console.log(pascal(5))