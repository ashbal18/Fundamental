let word: string =  "Hello World"

let num: number = 123

let isFalse: boolean = false


let upperWord: string = word.toUpperCase()
let lowerWord: string = word.toLowerCase()
let replaceWord: string = word.replace("e", "a")

console.log(upperWord)
console.log(lowerWord)
console.log(replaceWord)

console.log(word.slice(0, 8))
console.log(word.length)
console.log(word.charAt(1))
console.log(word.concat("!"))
console.log(word.search("ll"))

console.log(word.replace("o", "a"))
console.log(word.replace(/l/g, "a"))

const message: string = `Hello Purwadhika ${word}`
console.log(message)

console.log(typeof num.toString())
console.log(num.toExponential(2))
console.log(num.toPrecision(3))

console.log(Number("123"))

console.log(Number(1+1))

console.log(Boolean(-1))
console.log(Boolean(0))

//let show date time
let now: Date = new Date()
console.log(Date)