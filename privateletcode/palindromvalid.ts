function isPalindrome(s: string): boolean {
   
    const processedString = s
      .toLowerCase() 
      .replace(/[^a-z0-9]/g, ""); 


    // Palindrome Check
    const reversedString = processedString.split("").reverse().join("");
    return processedString === reversedString;
  }
  
 
  console.log(isPalindrome("A man, a plan, a canal: Panama"));
  console.log(isPalindrome("race a car")); 
  console.log(isPalindrome("")); 