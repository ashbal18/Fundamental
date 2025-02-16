// //Exercise1
// const input = 9;
// const limit = 10;

// for (let i = 1; i<= limit; i++){
//     console.log(`${input} x ${i} = ${input *1}`)
// }

// Exercise2
const str = "madam";
const reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log(`${str} → palindrome`);
} else {
    console.log(`${str} → not a palindrome`);
}


// // Exercise3
// const cm = 100000;
// const km = cm / 100000;

// console.log(`${cm} cm → ${km} km`);


// //exercise4
// const amount = 1000;

// const formatted = amount.toLocaleString("id-ID", {
//     style: "currency",
//     currency: "IDR",
//     minimumFractionDigits: 2,
// });

// console.log(formatted);


// //exercise5
// const mainString = "Hello world";
// const searchString = "ell";

// const result = mainString.replace(searchString, "");

// console.log(result);

// // exercise6
// const sentence = "hello world";

// const capitalized = sentence
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");

// console.log(capitalized);






/////////////////////////////////////////////////////////////////////exercise remedi
// let str: string = "kasur rusak";
// let reverseStr: string = ""; // nakam

// for (let i = str.length - 1; i >= 0; i--) {
//   //   console.log(str.charAt(i));
//   reverseStr += str.charAt(i);
// }

// console.log(str == reverseStr ? "Palindrome" : "Not Palindrome");


//exercise 4
// let n: number = 1000;
// let nstr: string = toString();
// let res: string = "";

// for (let i = nstr.length -1; i>= 0;  i--){
//     res =nstr.charAt(i) + res;
//     if (nstr.length - 1) % 3 ==  && nstr.length - i != nstr.length

// }

//exercise5.1
// let capitall = "hello word"

// console.log(capitall.replace (/\b\w/g, (char) => char.toUpperCase()));

// let resultt: string = "";
// for (let i = 0; i < capitall.length; i++){
//     if (i == 0 || capitall.charAt(i - 1) == " "){
//         resultt += capitall.charAt(i).toUpperCase();
//     }else{
//         resultt += capitall.charAt(i).toLocaleLowerCase();
//     }
// }
// console.log(resultt)



///////////////////////////////////////////////////////////////////////////////exercisekedua

//exercise 1

let capitall = "The QuiCk BrOwN Fox"


let resultt = "";
for (let i = 0; i < capitall.length; i++){
    let char = capitall.charAt(i);
    if (char === char.toUpperCase()){
        resultt += char.toLowerCase();
    }else{
        resultt += char.toUpperCase();
    }
}
console.log(resultt)



//exercise 2
// const num1 = 42, num2 = 27;

// if (num1 > num2) {
//     console.log(num1);
// } else {
//     console.log(num2);
// }


//exercise 3

// const num1 = 42, num2 = 27, num3 = 18;
// let smallest, middle, largest;

// // Logika untuk menentukan urutan
// if (num1 <= num2 && num1 <= num3) {
//     smallest = num1;
//     if (num2 <= num3) {
//         middle = num2;
//         largest = num3;
//     } else {
//         middle = num3;
//         largest = num2;
//     }
// } else if (num2 <= num1 && num2 <= num3) {
//     smallest = num2;
//     if (num1 <= num3) {
//         middle = num1;
//         largest = num3;
//     } else {
//         middle = num3;
//         largest = num1;
//     }
// } else {
//     smallest = num3;
//     if (num1 <= num2) {
//         middle = num1;
//         largest = num2;
//     } else {
//         middle = num2;
//         largest = num1;
//     }
// }

// console.log(`${smallest}, ${middle}, ${largest}`);










//exercise 4
const input = "hello"; // Ganti nilai untuk pengujian

if (typeof input === "string") {
    console.log(1);
} else if (typeof input === "number") {
    console.log(2);
} else {
    console.log(3);
}

//exercise 5
const sentence = "An apple a day keeps the doctor away";
let result = "";

for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    result += char.toLowerCase() === "a" ? "*" : char;
}

console.log(result);



