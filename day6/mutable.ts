// const name: string = "Andi";
// name ="budi";


// const arrNum: number[] = [1, 2, 3];
// arrNum.push(4);

// console.log(arrNum)


//value type
let city: string = " Bandung";
let city2: string = city;

//reference types
let arr: number [] = [1, 2, 3];
let arr2: number [] = arr;
arr.push(4);

console.log(arr);
console.log(arr2);


interface IUser {
    name: string;
    email: string;
    age: number;
}


const user: IUser = {
    name: "Frengki",
    email: "frengki @gmail.com",
    age: 26,
};

for (let key in user) {
    console.log(key);
    console.log(user[key as keyof typeof user]);
}
