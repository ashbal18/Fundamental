const data = {
    name: "Budi",
    age: 25,
    status: 'jomblo',
    alamat: 'jambi',
}

function sum(a: number, b: number) {

    return a + b;
}
function createTable(data: { [key: string]: any }) {
    console.log("|--------|-------|--------|--------|");
    console.log("| Nama   | Kelas | Status | Alamat |");
    console.log("|--------|-------|--------|--------|");
    console.log(`| ${data.name}   |  ${data.age}   | ${data.status} | ${data.alamat}  |`)
    console.log("|--------|-------|--------|--------|");
   
}



export {data, sum};

