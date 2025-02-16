// // function triangle(height: number) {
// //     for (let i = 1; i <= height; i++) {
// //         let res = "";
// //         for (let j = 1; j <= i; j++) {
// //             res += `${j} `; 
// //         } 
// //         console.log(res);
// //     }
// // }

// // triangle(5);



// // //2
// // function reverseTriangle(height: number) {
// //     for (let i = height; i >= 1; i--) {
// //         let res = "";
// //         for (let j = 1; j <= i; j++) {
// //             res += `${j} `;
// //         }
// //         console.log(res);
// //     }
// // }

// // reverseTriangle(5);


// //3
// // function reverseTriangleWithSensor(height: number) {
// //     for (let i = height; i >= 1; i--) {
// //         let res = "";
// //         for (let j = 1; j <= i; j++) {
// //             res += `* `;
// //         }
// //         console.log(res);
// //     }
// // }

// // reverseTriangleWithSensor(5);


// //4
// // function reverseTriangleWithSensor(height: number) {
// //     for (let i = height; i >= 1; i--) {
// //         let res = "";
// //         for (let j = 1; j <= i; j++) {
// //             if (j % 2 === 0) {
// //                 res += `* `;
// //             } else {
// //                 res += `${j} `;
// //             }
// //         }
// //         console.log(res);
// //     }
// // }

// // reverseTriangleWithSensor(5);


// // 3
// // function reverseTriangleWithSensor(height: number) {
// //     for (let i = height; i >= 1; i--) {
// //         console.log("".repeat(height - i) + "*".repeat);
// //     }
// // }

// // reverseTriangleWithSensor(5);




// //Exercise3
// // function pigLatin(sentence: string): string {
// //     return sentence
// //         .split(' ')
// //         .map(word => {
// //             if(word.match(/[a-z]/i)){
// //                 return word; 
// //             }
// //             const firstLetter = word[0];
// //             const restOfWord = word.slice(1);
// //             return `${restOfWord}${firstLetter}ay`;
// //         })
// //         .join(' ');
// // }

// // const input = "Pig Latin is cool !";
// // const output = pigLatin(input);
// // console.log(output);



// // function piglatin(str: string){
// //  return str.split(" ").map((item) =>{
// //         if(item.match(/[a-z]/i)){
// //             return item.slice(1) + item [0] + "ay";
            
// //  }else {
// //     return item;
// //  }
// // }).join(" ");
// // }
// // console.log(piglatin("pig latin is cool !"));


// function countvocal(str: string){
//     const vocal = "aiueo;"
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(vocal.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }

// // console.log(countvocal("hEllo world"));


// // function removalvocal(str: string){
// //     return str.split("").filter((item) => !["a"," i", "u", "e", "o"].includes(item)).join("");

// // }
// // console.log(removalvocal("hello world"));



// // function myFunc(str: string){
// //     const arr: string[] = "aiueo".split("");

// //     return str.split("").filter((item) => arr.includes(item.toLowerCase())).length;
// // }

// // console.log(myFunc("Hellooo"));



// // function convertAbjadToNumber (str: string){
// //     const abjad = "abcdefghijklmnopqrstuvwxyz";
// //     let result= "";
// //     for(let i = 0; i < str.length; i++){
// //         const index = abjad.indexOf(str[i].toLowerCase());
// //         result += index + 1;
// //     }
// // return result;

// // }
// // console.log(convertAbjadToNumber("Bandung"));



// function convertAbjadToNumber(str: string): number[] {
//     const abjad = "abcdefghijklmnopqrstuvwxyz";
//     let result: number[] = [];
//     for (let i = 0; i < str.length; i++) {
//         const index = abjad.indexOf(str[i].toLowerCase());
       
//             result.push(index + 1);
        
//     }
//     return result;
// }

// console.log(convertAbjadToNumber("plkb")); 


// const arr = "aiueo".split("");
// for(let i = 0; i < arr.length; i++){
    
//     // console.log(arr[i]);
// }


// const arrNum = [1,2,3,4,5]; // [6,7,8,9,10];
// const newNum = arrNum.map((item) => item + 5);
// console.log(newNum);

// const newArrNum: number[] = [];
// arrNum.forEach((item) => newArrNum.push(item + 5));
// console.log(newArrNum);






// function numTelphone (str:string){
//     const arr = str.split("");
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(i === 3 || i === 6){
//             result.push(arr[i] + "-");
//         }else{
//             result.push(arr[i]);
//         }
//     }
//     return result;

// }
// console.log(numTelphone("12345678910"))




// function numTelphone2 (str:string){
//     const arr = str.split("");
//     let result = "";
//         for(let i = 0; i < arr.length; i++) {
//             if(i === 4 || i === 7){
//                 result += arr[i] + "-";
//             }
//             else {
//                 result += arr[i];
//             }
//         }
//         return result;
//     }
// console.log(numTelphone2("(123)4567890"))



// function numTelphone3 (str:string){
//     const arr = str.slice(0);
//     let result = "";
//         for(let i = 0; i < arr.length; i++) {
//             if(i === 4 || i === 7){
//                 result += arr[i] + "-";
//             }
//             else {
//                 result += arr[i];
//             }
//         }
//         return result;
//     }
//     console.log(numTelphone3("(123)4567890"))


//         function numTelphone4(str: string): string {
        
//         const part1 = str.slice(0, 3);
//         const part2 = str.slice(3, 6);
//         const part3 = str.slice(6, 10);
//         return `(${part1})-${part2}-${part3}`;
//     }
    
//     console.log(numTelphone4("1234567890")); 


//     function numphone3(str:string){
//         let res = "(xxx)-xxx-xxxx";
//         str.split("").forEach((item) => {
//             res = res.replace("x", item);
//         } );
//         return res;
//     }
//     console.lg(numphone3("1234567890"));

// function BigSmall(arr: number[]){
//     arr.sort((a, b) => a - b);
//     const result = [];
//     const length = arr.length;
//     for (let i = 0; i < length; i++) {
//         if (i % 2 === 0) {
//             result.push(arr.pop());
//         } else {
//             result.push(arr.shift());
//         }
//     }
//     return result;
// }

// const inputArray = [1, 2, 3, 4, 5, 6, 7,8 ];
// const outputArray = BigSmall(inputArray);
// console.log(outputArray);



// function bigSmall2(arr: number[]) {
//     let result = [];
//     let length = arr.length;
//     let i = 0;
//     let j =arr.length

//     while (i < j) {
//         result.push(arr.pop());
//         result.push(arr.shift());
//         i += 2;
//     }
//     return result;
// }
// console.log(bigSmall2([1, 2, 3, 4, 5, 6, 7, 8]));




// function bigSmall3(arr: number[]): number[] {
//     arr.sort((a, b) => a - b); 
//     const result = [];
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         result.push(arr[right--]); 
//         if (left <= right) {
//             result.push(arr[left++]); 
//         }
//     }

//     return result;
// }

// console.log(bigSmall3([1, 2, 3, 4, 5, 6, 7, 8])); 


// function myFunc(arr: number[]){
//     arr.sort((a, b) => a - b);
//     let result: number[] = [];
    
//     for (let i = 0; i < arr.length / 2 ;  i++){
//         result.push(arr[arr.length - 1 - i]);
//         result.push(arr[i]);
//     }
//     return result;
// }

// const arr = [9, 10, 11, 12, 13, 14, 15, 16];
// console.log(myFunc(arr));


// // //exercise 5
// function splits(input: string): string[] {
//     return input.split(""); 
// }


// console.log(splits("helloworldbandung")); 

// function splitIntoWords(str: string): string[] {
//     return str.split(/(?=[A-Z])/); 
    
// }

// console.log(splitIntoWords("helloWorld")); 
// console.log(splitIntoWords("helloPurwadhikaBandung"));



// function splitword(str: string){
//     let res: string = "";
//     for (let i = 0; i < str.length; i++){
//         if(str[i] == str[i].toUpperCase()){
//             res += ` ${str[i]}`;
//         }else{
//             res += str[i];
//         }

//     }
//     return res.split(" ");
// }
// console.log(splitword("helloPurwhadikaBandung"));








// jumlah besar dan kecil dalam huruf

// function splitword(str: string){
//     let res: number[] = [];
//     let besar: number = 0;
//     let kecil: number = 0;
    
//     for (let i = 0; i < str.length; i++){
//         const karakter = str[i];
//         if(karakter >= 'A' && karakter <='Z' ){
//             besar++
//         } else if (karakter >= 'a' && karakter <='z'){
//             kecil++;
//         }

//     }
//     return {kecil, besar};
// }
// console.log(splitword( "Hello World" ));
// console.log(splitword( "Purwadhika" ));




// function splitword2(str: string){
//     let res: number[] = [];
    
//     for (let i = 0; i < str.length; i++){

//         if(str[i] >= 'A' && str[i] <='Z' ){
//             res.push(1);
//         } else if (str[i] >= 'a' && str[i] <='z' ){
//             res.push(0);
//         }

//     }
//     return {res};
// }
// console.log(splitword( "Hello World" ));
// console.log(splitword( "Purwadhika" ));



// function myFunc(str:string){
//     const letter = str.replace(/[^a-z]/gi, "");
//     const lower = letter.replace(/[A-Z]/g, "");

//     return [lower.length, letter.length - lower.length];
// }


// console.log(myFunc("Hello World23"));
// console.log(myFunc("Purwhadika!"))const x = 5;
// const arr = [1, 2, 3, 4, 5]

// console.log(arr.map(v => v + 1))




const arr: number[] = []



console.log(Boolean(arr));







