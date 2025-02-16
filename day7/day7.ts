function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage:
const input = 5;
console.log(`Factorial of ${input} is:`, factorial(input));
