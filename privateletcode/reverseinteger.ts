function reverse(x: number): number {
    const s = Math.abs(x).toString();
    const reversedS = s.split("").reverse().join("");
    const reversedNum = parseInt(reversedS);
  
    return (isNaN(reversedNum) || reversedNum > 2147483647 || reversedNum < -2147483648) ? 0 : (x < 0 ? -reversedNum : reversedNum);
  }
  console.log(reverse(123))