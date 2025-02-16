// function excelColumnToNumber(column: string): number {
//     let result = 0;
//     for (let i = 0; i < column.length; i++) {
//         const charCode = column.charCodeAt(i) - 64; 
//         result = result * 26 + charCode;
//     }
//     return result;
// }


// console.log(excelColumnToNumber("A"));  // Output: 1
// console.log(excelColumnToNumber("B"));  // Output: 2
// console.log(excelColumnToNumber("Z"));  // Output: 26
// console.log(excelColumnToNumber("AA")); // Output: 27
// console.log(excelColumnToNumber("AB")); // Output: 28
// console.log(excelColumnToNumber("ZY")); // Output: 701


function excelColumnToNumber2(str : string) : number{
    let result =0;
    for(let i = 0; i<str.length; i++){
        result *= 26;
        result += str[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
   return result;     

}

console.log(excelColumnToNumber2("A"))





//nomor 2
function singleonenumber(num: string) : number{
	let res = 0;
	for (let i = 0; i < num.length; i++) {
        res ^= Number(num.charAt(i));
       
	}
	return res;
}

console.log(singleonenumber("123344"))


//nomor 3

function anagram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
}

console.log(anagram("anagram", "nagaram"));


//latihan4
function Func(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    return Func(n - 1) + Func(n - 2);
}

console.log(Func(8));


//alternatif1

function myFunc(str: string){
    const arr = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let res = 0;

    for(let i = 0; i < str.length; i++) {
        res = res * 26 + arr.indexOf(str[i]);
    }
    return res;
}

console.log(myFunc("AB"));


//alternatif2

function myFunc2(arr: number[]){
    const set = new Set(arr);
    let res = -1;
    set.forEach((item) =>{
        if (arr.filter((value) => value == item).length == 1){
            res = item
        }
    });
    
return res;
}
console.log(myFunc2([2, 2, 1]));



//alternatif 4
function fibb( n: number){
    const res : number[] = [1, 1];
    for(let i = 1; i <  n; i++){
        res.push(res[i - 1] + res [i]);


    }
    return res[n]

}
console.log(fibb(4));

//

const obj: any[] = [
    () => [
        {
            arr: [
                [1, 2, 3],
                ["a", "b", "c"],
            ],
        },
    ],
    [8, 9, 10],
];

console.log(obj[0]()[0].arr[1][1]); // Output: b

