//exercise1
const rectangleLength = 5
const rectangleWidth = 3

const rectangleArea = rectangleLength * rectangleWidth

console.log(rectangleArea)

//exercise 2
const rectangleperimeterLength = 5
const rectangleperimeterWidth = 3

const rectangleperimeter = 2 * (rectangleperimeterLength + rectangleperimeterWidth)

console.log(rectangleperimeter)

//exercise 3
const phi = 3.14
const radius = 5

const diameter = 2 * radius
const circumference = 2 * phi * radius
const area = phi * radius **2

console.log(diameter)
console.log(circumference)
console.log(area)

//exercise 4
const angle1 = 80
const angle2 = 65

const thridangle = 180 - (angle1 + angle2)


console.log(thridangle)

//exercise 5
const totalDays = 400;
const years = Math.floor(totalDays / 365);
const months = Math.floor((totalDays % 365) / 30);
const days = (totalDays % 365) % 30;


console.log(`${years} year(s), ${months} month(s), ${days} day(s)`); 



//exercise 6
const date1 = new Date("2022-01-20").getTime();
const date2 = new Date("2022-01-22").getTime();
const diffInDays = Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

console.log(diffInDays); 

// remedi
// //5
// const n: number = 400
// //const years: number = Math.floor(totalDays / 365) //membulatkan kebawah //mat.ground membulatkan keatas //math.ceil membulatkan ke atas

// const num: number = n % 365 //35

// const years: number = (n - num) /365
// const month: number = Math.floor(num / 30) 
// const days: number = num % 30

// console.log(`${n} days -> ${years} year, ${month} month, ${days} day`)


// //6
// function dateDifference(date1: string, date2: string): number {
//     const diffTime = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
//     return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// }

// // Example usage
// console.log(dateDifference("2022-01-20", "2022-01-22")); // Output: 2