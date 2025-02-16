const fruits: string[] = ["apple", "banana", "mango", "apple"];

const newfruits = new Set(fruits);
newfruits.add("orange");
newfruits.delete("apple");


console.log(newfruits.has("banana"));
console.log(newfruits);

newfruits.forEach((item) => console.log(item));
