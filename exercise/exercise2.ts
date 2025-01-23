// //exercise 1
// const number = 6;

// if (number % 2 === 0) {
//     console.log(`${number} → even number`);
// } else {
//     console.log(`${number} → odd number`);
// }



// //exercise 2
// const num = 2;
// let isPrime = true;

// if (num <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;  
//         }
//     }
// }

// if (isPrime) {
//     console.log(`${num} → is a prime number`);
// } else {
//     console.log(`${num} → is not a prime number`);
// }


// exercise3
const N = 5;
let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
}

console.log(`Sum of numbers 1 to ${N} = ${sum}`); // Output: 15




// //Exercise 4
// const numberForFactorial = 4;
// let factorial = 1;

// for (let i = 1; i <= numberForFactorial; i++) {
//     factorial *= i;
// }

// console.log(`${numberForFactorial}! = ${factorial}`); 


// //Exercise 5
// // const fibCount = 15;
// // let a = 0, b = 1;

// // console.log(`Fibonacci sequence up to ${fibCount}:`);
// // for (let i = 1; i <= fibCount; i++) {
// //     console.log(a); 
// //     const next = a + b; 
// //     a = b; 
// //     b = next; 
// // }

// //exercise 5
// let a2 = 0, B = 1
// let N2 = 15
// for(let i = 2; i <= N2; i++) {
//         let next = a2 + B;
    
//     a2 = B
//     B = next
//     }
//     console.log(`${N2} -> ${B}`)






//fix Ex1

let n: number = 2
console.log(n % 2 == 0 ? "Event Number" : "odd Number")

//fix Ex2

let n1: number =7

let divider: number = 0;
for (let i = 1; i <= n; i++){
    if (n % i == 0) divider++
}

console.log(divider == 2 ? "Prime number" : "Not Prime Number")


