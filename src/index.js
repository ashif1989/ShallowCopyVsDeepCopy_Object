// Shallow copy
let obj = { name: "Ashif", age: 32 };

let obj1 = obj;
console.log("Shallow copy");
console.log(obj);
console.log(obj1);

obj1.name = "Lavanya";

console.log("Output");
console.log(obj);
console.log(obj1);

//deep copy
let obj2 = { name: "Ashif", age: 32 };
let obj3 = JSON.parse(JSON.stringify(obj2));

console.log("Deep copy");
console.log(obj2);
console.log(obj3);

obj3.name = "Lavanya";

console.log("Output");
console.log(obj2);
console.log(obj3);
