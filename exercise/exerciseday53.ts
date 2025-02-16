// Function to return only primitive data types
function getPrimitives(arr: any[]): any[] {
    return arr.filter(item => typeof item !== 'object' || item === null);
}

let arr1: any[] = [1, [], undefined, {}, "string", {}, []];
console.log(getPrimitives(arr1)); // Output: [1, undefined, "string"]

// Function to return sum of duplicate values
function sumOfDuplicates(arr: number[]): number {
    let count: Record<number, number> = {};
    let sum: number = 0;

    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });

    Object.keys(count).forEach(key => {
        let numKey = Number(key);
        if (count[numKey] > 1) {
            sum += numKey * (count[numKey] - 1);
        }
    });
    return sum;
}

let arr2: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumOfDuplicates(arr2)); // Output: 40

// Rock, Paper, Scissors game function
function rockPaperScissors(playerChoice: "rock" | "paper" | "scissors"): "Win" | "Lose" | "Draw" {
    const choices: ("rock" | "paper" | "scissors")[] = ["rock", "paper", "scissors"];
    const computerChoice: "rock" | "paper" | "scissors" = choices[Math.floor(Math.random() * choices.length)];
    
    if (playerChoice === computerChoice) {
        return "Draw";
    }
    
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Win";
    }
    return "Lose";
}

console.log(rockPaperScissors("rock")); // Output: 'Win', 'Lose' or 'Draw' randomly



