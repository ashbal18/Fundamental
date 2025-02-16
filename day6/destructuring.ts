let a, b;
[a, b] = [10, 20];

console.log(a);
console.log(b);


const person = {
    name: "David",
    age: 25,
};


const {name, age} = person

console.log(name)
console.log(person.age)


//spread operator (copy all values)

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const arr3: number[] = [...arr1, ...arr2];

console.log(arr3)


const user ={
    firstname:"frengky",
    lastName:"sihombing",
    greet(){
        console.log(`Hello ${this.firstname}`);
        console.log(`Hello ${this.lastName}`);
    },
};

user.greet()