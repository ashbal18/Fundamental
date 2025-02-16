function isAnagram(s: string, t: string): boolean {
    

    const sortedStr1 = s.split("").sort().join("");
    const sortedStr2 = t.split("").sort().join("");

    return sortedStr1 === sortedStr2;
}

console.log(isAnagram("anagram", "nagaram"));
console