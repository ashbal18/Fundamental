// //exercise 
// function createTrianglePattern(height: number): void {
//     let counter = 1;
//     let result: string[] = []; 
//     for (let i = 1; i <= height; i++) {
//         let row: string[] = []; 

//         for (let j = 1; j <= i; j++) {
//             row.push(counter < 10 ? "0" + counter : counter.toString()); 
//             counter++;
//         }
//         result.push(row.join(" ")); 
//     }

//     console.log(result.join("\n")); 
// }


// createTrianglePattern(4);


// //exercise 2

// function fizzBuzz(n: number): void {
//     const result = Array.from({ length: n }, (_, i) => {
//         const num = i + 1; 
//         if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
//         if (num % 3 === 0) return "Fizz";
//         if (num % 5 === 0) return "Buzz";
//         return num.toString(); 
//     });

//     console.log(result.join(", ")); 
// }


// fizzBuzz(6);  
// fizzBuzz(15); 

// //exercise 3
// function calculateBMI(weight: number, height: number): string {
//     const bmi = weight / (height * height); // Menghitung BMI

//     // Kondisi kategori BMI
//     if (bmi < 18.5) {
//         return "less weight";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         return "ideal";
//     } else if (bmi >= 25.0 && bmi <= 29.9) {
//         return "overweight";
//     } else if (bmi >= 30.0 && bmi <= 39.9) {
//         return "very overweight";
//     } else {
//         return "obesity";
//     }
// }

// console.log(calculateBMI(50, 1.75));  // Output: "ideal"
// console.log(calculateBMI(50, 1.6));   // Output: "less weight"
// console.log(calculateBMI(85, 1.75));  // Output: "overweight"
// console.log(calculateBMI(120, 1.8));  // Output: "very overweight"
// console.log(calculateBMI(150, 1.6));  // Output: "obesity"


//exercise 4
// const even: number[] = [1,2,3,4,5,6,7,8,9,10];

// const evenNum: number[]= even.filter((item) => item % 2 == 0);
// console.log(evenNum)


// //exercise 5
// function splits(input: string): string[] {
//     return input.split(" "); 
// }


// console.log(splits("Hello World")); // Output: ["Hello", "World"]




// Example
function triangle(height: number) {
    for (let i = 1; i <= height; i++) {
        let res = "";
        for (let j = 1; j <= i; j++) {
            res += `${j} `; 
        } 
        console.log(res);
    }
}

triangle(5);

//2
// function FizzBuzz(n:number){
//     for (let i = 1; i <= n; i++){
//         if( i % 3 == 0 && i % 5 == 0){
//     console.log("FizzBuzz");
//         }else if (i % 3 == 0);
//         console.log()
//     }else if (i % 3 == 0)
// }

//3










