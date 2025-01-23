function dateDifference(date1: string, date2: string): number {
    const diffTime = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Example usage
console.log(dateDifference("2022-01-20", "2022-01-22")); // Output: 2