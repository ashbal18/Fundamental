//exercise 1
// function areObjectsEqual(obj1: any, obj2: any): boolean {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

// if (keys1.length !== keys2.length) {
//     return false;
// }

// for (const key of keys1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// const obj1 = { a: 2 };
// const obj2 = { a: 1 };
// console.log(`Are objects equal:`, areObjectsEqual(obj1, obj2)); 

// const obj3 = { a: "Hello" };
// const obj4 = { a: 1 };
// console.log(`Are objects equal:`, areObjectsEqual(obj3, obj4)); 

// const obj5 = { a: 1 };
// const obj6 = { a: 1 };
// console.log(`Are objects equal:`, areObjectsEqual(obj5, obj6)); 



//exercise5

// function factorial(n: number): number {
//     return n <= 1 ? 1 : n * factorial(n - 1);
// }

// // Example usage:
// const factorialInput = 5;
// console.log(`Factorial of ${factorialInput} is:`, factorial(factorialInput));




// //exercise 2

// function getIntersection(obj1: any, obj2: any): any {
//     const intersection: any = {};

//     for (const key in obj1) {
//         if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
//             intersection[key] = obj1[key];
//         }
//     }

//     return intersection;
// }

// // Example usage:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, c: 3 };
// console.log(`Intersection of objects:`, getIntersection(obj1, obj2)); // Output: { a: 1 }



// //exercise 3

// interface Student {
//     name: string;
//     email: string;
// }

// function mergeStudentData(array1: Student[], array2: Student[]): Student[] {
//     const mergedArray = [...array1, ...array2];
//     const uniqueStudents: { [email: string]: Student } = {};

//     for (const student of mergedArray) {
//         uniqueStudents[student.email] = student;
//     }

//     return Object.values(uniqueStudents);
// }

// // Example usage:
// const array1: Student[] = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 2', email: 'student2@mail.com' }
// ];

// const array2: Student[] = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 3', email: 'student3@mail.com' }
// ];

// const result = mergeStudentData(array1, array2);
// console.log('Merged student data without duplicates:', result);






// //exercise 4
// function swapKeysAndValues(arr: { [key: string]: any }[]) {
//     return arr.map(obj => {
//         const swapped: { [key: string]: any } = {};
//         for (const key in obj) {
//             if (obj.hasOwnProperty(key)) {
//                 swapped[obj[key]] = key;
//             }
//         }
//         return swapped;
//     });
// }

// // Contoh penggunaan:
// const input = [{ name: 'David', age: 20 }];
// const output = swapKeysAndValues(input);
// console.log(output); // Output: [{ David: 'name', 20: 'age' }]




// Exercise 4
function factorial(n: number): number {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function getFormattedOutput(name: string, age: number): string {
    return `${name}: name, ${age}: age`;
}

// Example usage
const name = "David";
const age = 20;
console.log(getFormattedOutput(name, age));

