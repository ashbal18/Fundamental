class kendaraan {
    roda: number;

    constructor(roda: number){
        this.roda = roda;
    }
    berjalan(){
        console.log("kendaraan berjalan");
    }
}

class Mobil extends kendaraan {
    brand:string;
    price:number;

    constructor(brand:string, price: number){
        super(4);
        this.brand  = brand;
        this.price = price;
    }
}

const mobil1 = new Mobil ("BMW", 9000000);
console.log(mobil1);

console.log(mobil1 instanceof Mobil)
console.log(mobil1 instanceof kendaraan)
console.log(mobil1 instanceof Date)