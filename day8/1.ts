// class Employee {
//     name: string;
//     hourlyRate: number;
//     overtimeRate: number;
//     workingHours: number[];
    
//     constructor(name: string, hourlyRate: number, overtimeRate: number) {
//         this.name = name;
//         this.hourlyRate = hourlyRate;
//         this.overtimeRate = overtimeRate;
//         this.workingHours = [];
//     }
    
//     addWorkingHours(hours: number): void {
//         this.workingHours.push(hours);
//     }
    
//     calculateTotalSalary(): number {
//         return this.workingHours.reduce((total, hours) => {
//             return total + (hours > 6 ? hours * this.overtimeRate : hours * this.hourlyRate);
//         }, 0);
//     }
// }

// class FulltimeEmployee extends Employee {
//     constructor(name: string) {
//         super(name, 100000, 75000);
//     }
// }

// class ParttimeEmployee extends Employee {
//     constructor(name: string) {
//         super(name, 50000, 30000);
//     }
// }

// // Example Usage
// const fullTimeEmp = new FulltimeEmployee("Iqbal");
// fullTimeEmp.addWorkingHours(5);
// fullTimeEmp.addWorkingHours(7);
// console.log(`Total Salary for ${fullTimeEmp.name}: IDR ${fullTimeEmp.calculateTotalSalary()}`);

// const partTimeEmp = new ParttimeEmployee("Adam");
// partTimeEmp.addWorkingHours(4);
// partTimeEmp.addWorkingHours(8);
// console.log(`Total Salary for ${partTimeEmp.name}: IDR ${partTimeEmp.calculateTotalSalary()}`);


//2
class employee{
    name: string
    type: "fulltime" | "partime"
    #hour: number = 0
    #bSallary: number
    #otSallary: number

    constructor(name: string, type:"fulltime" | "partime", bSallary: number, otSallary: number){
        this.name = name
        this.type = type
        this.#bSallary = bSallary
        this.#otSallary = otSallary
    }

    addHour(n: number){
        this.#hour += n
        return this.#hour
    }

}

class fulltimeEmployee extends employee{
    constructor(name: string){
        super(name, "fulltime", 100000, 75000)
    }
}


class parttimeEmployee extends employee{
    constructor(name: string){
        super(name, "fulltime", 50000, 30000)
    }
}

const employee1 = new fulltimeEmployee("iqbal")
employee1.addHour(5)