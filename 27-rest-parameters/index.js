// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array

//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array

function openFridge(...foods) { 
  console.log(foods);
}
function getfood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
 
// openFridge(food1, food2, food3, food4, food5)
const foods = getfood(food1, food2, food3, food4, food5);

console.log(foods);

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

// const total = sum(1, 2, 3, 4, 5)

// console.log(`your total is ${total}`);

function getavg(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const total = getavg(1, 2, 3, 4, 5);

console.log(`your total is ${total}`);

function combinedstrings(...strings) {
  return strings.join(" ");
}

const fullname = combinedstrings("Mr", "Spongrbob", "Squarepants", "III");

console.log(fullname);
