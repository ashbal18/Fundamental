const n: number = 400
//const years: number = Math.floor(totalDays / 365) //membulatkan kebawah //mat.ground membulatkan keatas //math.ceil membulatkan ke atas

const num: number = n % 365 //35

const years: number = (n - num) /365
const month: number = Math.floor(num / 30) 
const days: number = num % 30

console.log(`${n} days -> ${years} year, ${month} month, ${days} day`)