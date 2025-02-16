let arr: string[] = ["a", "b", "c", "d", "e"]
let arr2: string[] = new Array("a", "b", "c", "d", "e")

console.log(arr);
console.log(arr2);

console.log(arr[1])

//nambahin value baru
arr.push("f")
//hapus value terakhir
arr.pop()

//nambahin value awal/pertama
arr.unshift("z")

//hapus value pertama
arr.shift()

// arr.splice(2, 2, "g", "t")

arr.splice(3, 1,"g")

arr.sort()
arr.reverse()

console.log(arr);


const numArr: number[] = [1,2,3,4,5,6];

const evenNum: number[]= numArr.filter((item) => item % 2 == 0);
console.log(evenNum)

const fruits: string[] = ["apple,","orange","plum","banana"];

fruits.forEach((item) => {
    console.log(item +"item");
});

for (let fruit of fruits){
    console.log(fruit);
}


