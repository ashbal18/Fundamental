function isPalindrome(x: number): boolean {
const reversed = x.toString().split("").reverse().join("");

if (x === parseInt(reversed)) {
    console.log(`${x}`);
    return true;
} else {
    console.log(`${x}`);
    return false;
}
}
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))

