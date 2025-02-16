// interface ICar {
//     brand: string;
//     model: string;
//     price: number;
// }


// const car: ICar = {
//     brand: "BMW",
//     model: "M1351",
//     price: 800000000000,
// };

// console.log(car)

interface IPerson{
    name: string;
    age: number;
    hobby?: string;
    address?:  {
        city: string;
        country: string;
    };
}

const person: IPerson= {
    name: "Frangky",
    age: 26
    
};

//add property
person.hobby = "Coding";

//delete property
delete person.hobby;

console.log(person.name);


person.address = {
    city: "Bandung",
    country: "Indonesia"
};

//optional chaining ?
console.log(person.address?.city);

console.log(Object.keys(person));


