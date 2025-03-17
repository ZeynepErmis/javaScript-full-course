// spread operator = ... allow an iterable such as an
//                   array or string to be expanded
//                   into soperate elements
//                   (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(maximum);
console.log(min);

let userName = "Ankit Kargupta";
let letters = [...userName].join(" ");
console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);
