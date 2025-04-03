// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

//Swap the value of two variables
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);

//Swap 2 elements in an array
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];
  
// ASSIGN ARRAY ELEMENTS TO VARIABLES
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// EXTRACT VALUES FROM OBJECTS
const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry cook",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};

const { firstName, lastName, age, job = "Unemployed" } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// DESTRUCTURING IN FUNCTION PARAMETERS
function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);
