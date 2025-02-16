// interface IUser {
//     name: string;
//     email: string;
//     age: number;
//     score: number;
// }

// const users: IUser[] = [
//     { name: "Iqbal", email: "iqbal@gmail.com", age: 26, score: 80 },
//     { name: "Adam", email: "Adam@gmail.com", age: 22, score: 90 },
//     { name: "Bon", email: "Bon@gmail.com", age: 24, score: 75 },
// ];

// const calculateStats = (arr: number[]) => ({
//     highest: Math.max(...arr),
//     lowest: Math.min(...arr),
//     average: Number((arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2)),
// });

// const stats: Record<string, { highest: number; lowest: number; average: number }> = {
//     score: calculateStats(users.map(u => u.score)),
//     age: calculateStats(users.map(u => u.age)),
// };

// // Menampilkan data user
// console.log("USER DATA:");
// users.forEach(user => {
//     console.log(`Name: ${user.name}, Email: ${user.email}, Age: ${user.age}, Score: ${user.score}`);
// });

// // Menampilkan statistik
// console.log("STATISTICS:");
// Object.keys(stats).forEach((key) => {
//     console.log(`${key.toUpperCase()}:`);
//     const subStats = stats[key];
//     Object.keys(subStats).forEach((subKey) => {
//         console.log(`  ${subKey}: ${subStats[subKey as keyof typeof subStats]}`);
//     });
// });

//soal nomor
// class Student {
//   name: string
//   email: string
//   score: number
//   age: number

//   constructor(name: string, email: string, dob: string, score: number) {
//     this.name = name;
//     this.email = email;
//     this.score = score;
//     this.age = this.calculateAge(dob);
//   }

//   calculateAge(dob: string) {
//     const date1 = new Date();
//     const date2 = new Date(dob);
//     const diff = date1.getTime() - date2.getTime();
//     return Math.floor (diff / (24 * 60 * 60 * 1000) / 365);

//   }

// }

// const student1 = new Student("Andi", "andi@gmail,com", "1999-01-01", 80);
// const student2 = new Student("Budi", "Budi@gmail,com", "1998-02-10", 85);
// const student3 = new Student("Caca", "Caca@gmail,com", "2000-03-20", 88);


// const arrStudent: Student[] = [student1, student2, student3];


// function myFunc (arr: Student[]) {
//   const score = arr.map((item) => item.score);
//   const age = arr.map((item) => item.age);

//   return {
//     score: {
//       highest: Math.max(...score),
//       lowest: Math.min(...score),
//       average: score.reduce((a, b) => a + b) / score.length,
//     },
//     age: {
//       highest: Math.max(...age),
//       lowest: Math.min(...age),
//       average: age.reduce((a,b) => a + b ) / age.length,
//     },
//   };
// }

// console.log(myFunc(arrStudent));



//soal2

class product {
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name
        this.price = price
    }
}

const product1 = new product("Apple", 10000)
const product2 = new product("Banana", 20000)
const product3 = new product("Cherry", 5000)
const product4 = new product("Durian Belanda", 30000)

interface CartItem extends product{
    qty: number;
    total: number;
}


class Transaction {
    total: number = 0;
    products: CartItem[] = [];

    addToCart(item: product, qty: number){
        const CartItem: CartItem = {
            ...item,
            qty: qty,
            total: item.price * qty,
        };
        this.products.push(CartItem);
        this.total += CartItem.total;
        
    }
    showTotal(){
        console.table(this.products);
        console.log(`Total: ${this.total}`);
    }

    checkout(money: number){
        if (money < this.total){
            throw new Error("uang anda tidak cukup");
        }else{
            console.log(`Cash: ${money}`);
            console.log(`Return: ${money - this.total}`);
            console.log(`~~~ Thank You ~~~`)

        }
    }
}

const Transaction1= new Transaction()
Transaction1.addToCart(product1, 5);
Transaction1.addToCart(product4, 1);
Transaction1.showTotal()
Transaction1.checkout(100000);

console.log(Transaction1);