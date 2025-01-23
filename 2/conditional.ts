let age: number = 21

if (age>=17) {
    console.log("You can now create an ID Card")
}  else {
    console.log("You are not old enough to create an ID Card")
}

let grade: string = "D";

if (grade === "A") {
    console.log("Excellent Result");
} else if (grade === "B") {
    console.log("Great Result!");
} else if (grade === "C") {
    console.log ("Average Result!");
} else {
    console.log("Invalid Grade")
}

let now: Date = new Date("90-90-90")
let day: number = now.getDay() // 0, 1 - 6

switch(day) {
    case 0:
        console.log("Minggu");
        break;
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    case 4:
        console.log("Kamis");
        break;
    case 5:
        console.log("Jumat");
        break;
    case 6:
        console.log("Sabtu");
        break;
    default:
    console.log("tidak ada data")

}

//logika operator
let x: number = 6
let y: number = 3

console.log(x < 10 && y > 10) //true
console.log(x < 1 || y == 1) //true
console.log(!(x == y)) //true

//ternary operator
const str: string = "Typescript"

if (str == "Typescript"){
    console.log("Typescript")
}else {
    console.log("Not Typescript");
}

//ternary operator (mempersingkat kondisional)
console.log(str == "Typescript" ? "Typescript" : "Not Typescript")

//short circuiting
//|| or pas true false
//&& kebalikan true false
let value: string = "Andi" //false
let name: string = value && "budi"

console.log(name)








