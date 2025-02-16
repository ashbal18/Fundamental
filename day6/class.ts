// const person1 = {
//     name: "David",
//     age: 20,
// };
// const person2 = {
//     name: "David2",
//     age: 20,
// };
// const person3 = {
//     name: "David3",
//     age: 20,
// };
// const person4 = {
//     name: "David4",
//     age: 20,
// };

class Person {
    name: string;
    age: number;

    constructor(nama: string, umur: number){
        this.name = nama;
        this.age = umur;
    }

    greet() {
        console.log(`hello ${this.name}`)
    }
}

const person1 = new Person("Andi", 20);
const person2 = new Person("Budi", 20);

console.log(person1)
person2.greet()


