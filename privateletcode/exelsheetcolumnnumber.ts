// function myFunc(str: string){
//     const arr = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//     let res = 0;

//     for(let i = 0; i < str.length; i++) {
//         res = res * 26 + arr.indexOf(str[i]);
//     }
//     return res;
// }

// console.log(myFunc("AB"));


function titleToNumber(columnTitle: string): number {
    const arr = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let res = 0;

    for(let i = 0; i < columnTitle.length; i++) {
        res = res * 26 + arr.indexOf(columnTitle[i]);
    }
    return res;
};

console.log(titleToNumber("AB"));