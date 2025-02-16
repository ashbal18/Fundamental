function toExcelColumnTitle(columnNumber: number): string {
    const arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let res = "";

    for (; columnNumber > 0; columnNumber = Math.floor(columnNumber / 26)) {
        columnNumber--;
        res = arr[columnNumber % 26] + res;
    }

    return res;
}

console.log(toExcelColumnTitle(1));   
console.log(toExcelColumnTitle(28));  
console.log(toExcelColumnTitle(701)); 
